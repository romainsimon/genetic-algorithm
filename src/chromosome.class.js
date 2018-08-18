'use strict'

const { stringDiff } = require('./fitness')

/**
 * Chromosome is combination of genes
 * It can be mutated or combined with another chromosome (crossover)
 *
 */
class Chromosome {

  /**
   * Create a new Chromosome
   *
   * @param {number} populationSize     Total size of the chromosomes population
   * @param {number} length             Number of genes in a chromosome
   * @param {Array}  genesPool          Possible genes for a chromosome
   */
  constructor(length=20, genesPool=[0,1]) {
    this.length = length
    this.genesPool = genesPool
    this.dna = [...Array(this.length)]
      .map(gene => this.genesPool[Math.floor(Math.random()*this.genesPool.length)])
      .join('').toString()
    this.fitness = 0
  }

  /**
   * Evalutate the fitness of chromosome
   *
   * @param {Function} fitFunction     Fitness function used to score chromosomes
   */
  calculateFitness(fitFunction) {
    this.fitness = fitFunction(this)
    return this.fitness
  }

  /**
   * Creates a child chromosome by combining DNA
   * of this chromosome + another chromosome B
   *
   * @param {Chromosome} chromosomeB    Another chromosome
   */
  crossover(chromosomeB) {
    const child = new Chromosome()
    const cutPosition = Math.floor(Math.random()*(this.length-1))
    child.dna = this.dna.slice(0, cutPosition) + chromosomeB.dna.slice(cutPosition)
    return child
  }

  /**
   * Mutates some of the genes in the chromosome
   *
   * @param {Chromosome} chromosomeB    Chance of mutation
   */
  mutate(percent=.1) {
    this.dna = this.dna.split()
      .map(gene => {
        if (Math.random() < percent)
          return this.genesPool[Math.floor(Math.random()*this.genesPool.length)]
        else
          return gene
      }).join('').toString()
    return this.dna
  }
}

module.exports = { Chromosome }
