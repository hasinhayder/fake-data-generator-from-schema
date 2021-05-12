import faker from 'faker'
import providers from './providers.mjs'
import schema from './schema.mjs'
import { writeFileSync } from 'fs'

const generatedData = genereateData(schema, providers)
if (schema.output) {
  writeFileSync(schema.output, JSON.stringify(generatedData, null, 2))
} else {
  console.log(JSON.stringify(generatedData, null, 1))
}

function genereateData (schema, providers) {
  let generatedData = []
  const limit = schema.limit ? schema.limit : 10
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

function callFunction (seed, providers, tempData) {
  if (seed.indexOf(',') !== -1) {
    let args = seed.split(',')
    let fn
    const provider = args.shift().trim()
    args = args.map(i => `'${i.trim()}'`)
    if (providers.processors.indexOf(provider) !== -1) {
      fn = `${provider}(tempData,${args.join(',')})`
    } else if ('emailDomain' == providers[provider]) {
      fn = `faker.internet.email('','',${args.join(',')})`
    }
    return eval(fn)
  }
  return eval(providers[seed])
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
