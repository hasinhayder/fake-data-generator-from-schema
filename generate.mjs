import faker from 'faker'
import providers from './providers.mjs'
import schema from './schema.mjs'
import { writeFileSync } from 'fs'

const generatedData = genereateData(schema, providers)
if (schema.output) {
  writeFileSync(schema.output, JSON.stringify(generatedData, null, 2))
} else {
  console.log(JSON.stringify(generatedData, null, 2))
}

function genereateData (schema, providers) {
  let generatedData = []
  const limit = schema.limit ?? 10
  const total =
    'random' == schema.total
      ? parseInt(faker.datatype.number(limit))
      : schema.total ?? 1
  for (let j = 0; j < total; j++) {
    let tempData = {}
    for (const i in schema.types) {
      if (typeof schema.types[i] == 'object') {
        //generate nested data
        tempData[i] = genereateData(schema.types[i], providers)
      } else {
        tempData[i] = callFunction(schema.types[i], providers, tempData)
      }
    }

    //skip data from the final result set
    const skips = schema.skips ?? []
    skips.map(item => delete tempData[item])

    //return data as a single item or array?
    const returnType = schema.return ?? 'array'
    if ('single' == returnType) {
      generatedData = tempData
    } else {
      generatedData.push(tempData)
    }
  }

  return generatedData
}

function getProviderCallback (seed, providers) {
  let provider

  if (
    providers.providers[seed] == undefined &&
    providers.processors.includes(seed) == false &&
    providers.providersWithParams[seed] == undefined
  ) {
    provider = `faker.${seed}`
  } else if (providers.providers[seed] != undefined) {
    provider = `${providers.providers[seed]}`
  } else if (providers.processors.includes(seed) != false) {
    provider = seed
  } else if (providers.providersWithParams[seed] != undefined) {
    provider = 'fakerProxy'
  }
  return provider
}

function callFunction (seed, providers, tempData) {
  let args = seed.split(',')
  let fn
  const _provider = args.shift().trim()
  const provider = getProviderCallback(_provider, providers)

  args = processArgs(args)
  if (providers.processors.indexOf(provider) !== -1) {
    fn = `${provider}(tempData,${args.join(',')})`
  } else if ('fakerProxy' == provider) {
    const fakerProvider = providers.providersWithParams[_provider]
    fn = `fakerProxy('${fakerProvider}',${args.join(',')})`
  } else {
    fn = providers.providers[seed]
  }
  return eval(fn)
}

function processArgs (args) {
  return args.map(item => {
    if (item == 'true' || item === true) {
      return true
    } else if (item == 'false' || item === false) {
      return false
    } else {
      return `'${item.trim()}'`
    }
  })
}

function joiner (tempData, ...params) {
  return params.map(item => tempData[item] ?? item).join('')
}
function joinerDot (tempData, ...params) {
  return params.map(item => tempData[item] ?? item).join('.')
}
function joinerSpace (tempData, ...params) {
  return params.map(item => tempData[item] ?? item).join(' ')
}
function joinerComma (tempData, ...params) {
  return params.map(item => tempData[item] ?? item).join(',')
}

function joinerHash (tempData, ...params) {
  return params.map(item => tempData[item] ?? item).join('#')
}

function prepend (tempData, ...params) {
  return params[0] + tempData[params[1]]
}

function append (tempData, ...params) {
  return tempData[params[1]] + params[0]
}

function randomNumber (tempData, min = 0, max = 100) {
  min = parseInt(min)
  max = parseInt(max)
  let n = faker.datatype.number(max)
  if (n < min) {
    n += max - min
  }
  return n
}

//this will return one random item from the list
function randomItem (tempData, ...params) {
  return faker.helpers.randomize(params);
}

//this will return N number of items from the list, number of items varies from 0 to N
function randomItemNMax (tempData, n, ...params) {
  const length = randomNumber(tempData, 1, n)
  params = faker.helpers.shuffle(params)
  return params.splice(0, length)
}

//this will return exactly N number of items from the list
function randomItemN (tempData, n, ...params) {
  const length = n
  params = faker.helpers.shuffle(params)
  return params.splice(0, length)
}

function year (tempData, min = 1900, max = 2200) {
  return randomNumber(tempData, min, max)
}

function emailDomain (tempData, domain = 'example.com') {
  return faker.internet.email('', '', domain)
}

function fakerProxy (provider, ...params) {
  params = processArgs(params)
  const fn = `${provider}(${params.join(',')})`
  return eval(fn)
}
