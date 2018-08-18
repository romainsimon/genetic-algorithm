'use strict'

const { Chromosome } = require('./chromosome.class')
const { stringDiff } = require('./fitness')

/**
 * Population is of group of chromosomes
 *
 */
class Population {

  /**
   * Create a new population of chromosomes
   *
   * @param {number} populationSize     Total size of the chromosomes population
   * @param {number} chromosomeLength   Number of genes in a chromosome
   * @param {Array}  genesPool          Possible genes for a chromosome
   */
  constructor(populationSize=10, chromosomeLength=20, genesPool=[0,1]) {
    this.generation = 0
    this.populationSize = populationSize
    this.chromosomeLength = chromosomeLength
    this.genesPool = genesPool
    this.currentPopulation = [...Array(this.populationSize)]
      .map(chromosome => new Chromosome(chromosomeLength, genesPool))
  }

  /**
   * Evalutate the fitness of entire population according to fitness function
   * Sorts the population from highest fitness score to lowest
   *
   * @param {Function} fitnessFunc     Fitness function used to score chromosomes
   */
  evaluate(fitnessFunc=stringDiff) {
    for (const chromosome of this.currentPopulation)
      chromosome.fitness(fitnessFunc)
    this.currentPopulation.sort((chA,chB) => chB.fitness - chA.fitness)
    console.log(`  - Highest fitness: ${this.currentPopulation[0].fitness}`)
  }

  /**
   * Select the best chromosomes in the population according to survival rate
   *
   * @param {number}   survivalRate     Percent of population that survives [0-1]
   */
  select(survivalRate=.2) {
    const nbSelected = Math.ceil(this.populationSize * survivalRate)
    this.currentPopulation = []
    for (const i in scoredChromosomes)
      if (i <= nbSelected) this.currentPopulation.push(scoredChromosomes[i].chromosome)
  }

  /**
   * Create new random chromosomes to match the max population size
   * It does not do crossover or mutation, but simply repopulates
   *
   */
  repopulate() {
    const nbToGenerate = this.populationSize - this.currentPopulation.length
    const newChromosomes = Array(nbToGenerate).fill('').map(ch => new Chromosome().dna)
    this.currentPopulation = [...this.currentPopulation, ...newChromosomes]
  }

  /**
   * Evolves the population via different steps:
   * selection, crossover, mutation
   *
   * @param {number} iterations     Number of iterations
   */
  evolve(iterations=1000) {
    while (this.generation<iterations) {
      console.log(`==> Generation ${current}`)
      this.evaluate()
      this.select()
      this.repopulate()
      this.generation++
    }
    console.log(`  - Best Chromosome: ${this.currentPopulation[0].dna}`)
    return this.currentPopulation[0]
  }
}


module.exports = { Population }
