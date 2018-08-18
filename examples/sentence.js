'use strict'

const { Population } = require('../src/population.class')

const alphabet = [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
const target = "JE SUIS UN ROBOT ET JE MANGE DES BOULONS"

const fitnessFunction = (chromosome) => {
  return chromosome.dna.split('')
    .reduce((acc, current, i) => acc + (current === target[i] ? 1 : 0), 0) / target.length
}

const population = new Population(10, target.length, alphabet)
population.evolve(10000, fitnessFunction)
