// Fails on any skill past the house limits: SKILL.md lines, description and name length, and its evals.
// Tighter than the Agent Skills spec's (1,024 characters) so a skill stays quick to load and to read.
// Names are also unique: many agents install every skill into one flat folder.
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const MAX_LINES = 200
const MAX_DESCRIPTION = 550
const MAX_NAME = 64
const MIN_EVALS = 3
const MAX_EVALS = 4
const NAME_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/
const seenNames = new Map()

function readFrontmatter(content) {
  const frontmatter = content.split('---')[1] ?? ''
  const name = frontmatter.match(/^name:\s*(.+)$/m)?.[1].trim() ?? ''
  const folded = frontmatter.match(/^description:\s*>-?\s*\n((?:[ \t]+.*\n?)+)/m)
  const inline = frontmatter.match(/^description:\s*(?!>)(.+)$/m)
  const description = (folded?.[1] ?? inline?.[1] ?? '').split(/\s+/).join(' ').trim()
  return { name, description }
}

function checkEvals(dir, skill) {
  const file = join(dir, 'evals', 'evals.json')
  if (!existsSync(file)) return [`${file}: missing`]
  let evals
  try {
    evals = JSON.parse(readFileSync(file, 'utf8'))
  } catch (error) {
    return [`${file}: not valid JSON (${error.message})`]
  }
  const count = Array.isArray(evals.evals) ? evals.evals.length : 0
  return [
    evals.skill_name !== skill &&
      `${file}: skill_name "${evals.skill_name}" doesn't match the folder "${skill}"`,
    (count < MIN_EVALS || count > MAX_EVALS) &&
      `${file}: ${count} evals (${MIN_EVALS}–${MAX_EVALS} expected)`,
  ].filter(Boolean)
}

const problems = readdirSync('plugins').flatMap((plugin) =>
  readdirSync(join('plugins', plugin, 'skills')).flatMap((skill) => {
    const dir = join('plugins', plugin, 'skills', skill)
    const file = join(dir, 'SKILL.md')
    const content = readFileSync(file, 'utf8')
    const lineCount = content.split('\n').length - (content.endsWith('\n') ? 1 : 0)
    const { name, description } = readFrontmatter(content)
    const firstWithName = seenNames.get(name)
    seenNames.set(name, file)
    return [
      lineCount > MAX_LINES && `${file}: ${lineCount} lines (max ${MAX_LINES})`,
      description.length > MAX_DESCRIPTION &&
        `${file}: description ${description.length} characters (max ${MAX_DESCRIPTION})`,
      !description && `${file}: no description`,
      name !== skill && `${file}: name "${name}" doesn't match the folder "${skill}"`,
      name.length > MAX_NAME && `${file}: name ${name.length} characters (max ${MAX_NAME})`,
      !NAME_PATTERN.test(name) &&
        `${file}: name "${name}" must be lowercase letters, numbers and single hyphens`,
      firstWithName && `${file}: name "${name}" is already used by ${firstWithName}`,
      ...checkEvals(dir, skill),
    ].filter(Boolean)
  })
)

if (problems.length > 0) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log('Every skill is within the limits.')
