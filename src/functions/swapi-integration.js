const axios = require('axios')
const swapi = require('swapi-node')

async function allPlanets () {
   const allPages = await axios.all([
    axios.get('https://swapi.py4e.com/api/planets/?page=1'),
    axios.get('https://swapi.py4e.com/api/planets/?page=2'),
    axios.get('https://swapi.py4e.com/api/planets/?page=3'),
    axios.get('https://swapi.py4e.com/api/planets/?page=4'),
    axios.get('https://swapi.py4e.com/api/planets/?page=5'),
    axios.get('https://swapi.py4e.com/api/planets/?page=6')
  ]).then(response => {
    const allResponses = [
      ...response[0].data.results,
      ...response[1].data.results,
      ...response[2].data.results,
      ...response[3].data.results,
      ...response[4].data.results,
      ...response[5].data.results,
    ]
    return allResponses
  })
  return allPages
}

const getPlanetInfo = async (planetName) => {
  try {
    const planets = await allPlanets()
    const planetsNames = planets.map(planet => planet.name)
    if (planetsNames.includes(planetName)) {
      const planetInfo = planets.find(planet => planet.name === planetName)
      return planetInfo
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getPlanetInfo
}
