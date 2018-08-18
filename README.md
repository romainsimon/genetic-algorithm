<h1 align="center">Genetic Algorithm</h1>

<div align="center">
  A naive try at creating a genetic algorithm in ES6
</div>

<br />

<div align="center">
  <!-- Build Status -->
  <img src="https://img.shields.io/travis/romainsimon/genetic-algorithm.svg?style=flat-square"
    alt="Build Status" />
  <!-- Test Coverage -->
  <img src="https://img.shields.io/coveralls/github/romainsimon/genetic-algorithm/master.svg?style=flat-square"
    alt="Test Coverage" />
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
</div>

## Examples

```js
const populationSize = 200
const chromosomeLength = 40
const genesPool = [0, 1]
const population = new Population(populationSize, chromosomeLength, genesPool)

const nbGenerations = 10000
const fitnessFunction = chromosome => ({
  // => Add fitness function here
  //    Should return a fitness score between 0 and 1
})
population.evolve(nbGenerations, fitnessFunction)

const bestChromosome = population.currentPopulation[0]
console.log(bestChromosome.dna)
console.log(bestChromosome.fitness)

```
