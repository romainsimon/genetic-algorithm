'use strict';

const { expect } = require('chai')
const { Population } = require('./population.class')

describe('Population', () => {

  describe('creation', () => {

    it('should create a new Population with all properties', () => {
      const population = new Population()
      expect(population).to.be.an('object')
      expect(population).to.have.all.keys('generation', 'populationSize', 'chromosomeLength', 'genesPool', 'currentPopulation')
    })

    it('should create a new Population with generation 0', () => {
      const population = new Population()
      expect(population.generation).to.equal(0)
    })

    it('should create a new Population with population size', () => {
      const size = 18
      const population = new Population(size)
      expect(population.populationSize).to.equal(size)
      expect(population.currentPopulation).to.have.lengthOf(size)
    })

    it('should create a new Population with chromosome length', () => {
      const length = 42
      const population = new Population(5, length)
      for (const chromosome of population.currentPopulation)
        expect(chromosome.dna).to.have.lengthOf(length)
    })

    it('should create a new Population with chromosome having genes from genes pool', () => {
      const genesPool = ['A', 'T', 'G', 'C']
      const population = new Population(5, 21, genesPool)
      for (const chromosome of population.currentPopulation) {
        const genes = chromosome.dna.split('')
        for (const gene of genes)
          expect(gene).to.be.oneOf(genesPool)
      }
    })

  })

})
