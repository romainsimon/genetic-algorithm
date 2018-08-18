'use strict'

const EXPECTED = '10101010101010101010'

/**
 * Stupid fitness function that makes string comparison
 * This has no utility other than testing
 *
 * @param {string} chromosome   Mutated chromosome
 */
const stringDiff = (chromosome) => {
  return chromosome.dna.split('')
    .reduce((acc, current, i) => acc + (current === EXPECTED[i] ? 1 : 0), 0) / EXPECTED.length
}

module.exports = { stringDiff }
