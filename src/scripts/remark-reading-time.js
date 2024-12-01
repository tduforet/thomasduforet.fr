import { readingTime } from 'reading-time-estimator'
import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree)
    const result = readingTime(textOnPage, 260, 'fr')

    data.astro.frontmatter.minutesRead = result.text
  }
}
