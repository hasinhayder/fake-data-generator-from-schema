import { writeFileSync } from "fs"
import faker from "faker"
import providers from "./providers.mjs"
import schema from "./schema.mjs"
const autoIncrements = []

const generatedData = genereateData(schema, providers)
if (schema.output) {
  writeFileSync(schema.output, JSON.stringify(generatedData, null, 2))
} else {
  console.log(JSON.stringify(generatedData, null, 2))
}

function genereateData(schema, providers) {
  let generatedData = []
  const loopId = `H2${parseInt(Math.random() * 1000000)}-${parseInt(Math.random() * 1000000)}`
  autoIncrements[loopId] = autoIncrements[loopId] ?? 0
  const limit = schema.limit ?? 10
  const total = "random" == schema.total ? parseInt(faker.datatype.number(limit)) : schema.total ?? 1
  for (let j = 0; j < total; j++) {
    const tempData = {}
    autoIncrements[loopId]++
    for (const i in schema.structure) {
      if ("object" == typeof schema.structure[i]) {
        //generate nested data
        tempData[i] = genereateData(schema.structure[i], providers)
      } else {
        if ("autoIncrement" == schema.structure[i]) {
          tempData[i] = autoIncrements[loopId]
        } else {
          tempData[i] = callFunction(schema.structure[i], providers, tempData)
        }
      }
    }

    //skip data from the final result set
    const skips = schema.skips ?? []
    skips.map((item) => delete tempData[item])

    //return data as a single item or array?
    const returnType = schema.return ?? "array"
    if ("single" == returnType) {
      generatedData = tempData
    } else {
      generatedData.push(tempData)
    }
  }

  return generatedData
}

function getProviderCallback(seeder, providers) {
  let provider
  if (undefined == providers.providers[seeder] && false == providers.processors.includes(seeder) && undefined == providers.providersWithParams[seeder]) {
    provider = `staticData`
  } else if (undefined != providers.providers[seeder]) {
    provider = `${providers.providers[seeder]}`
  } else if (false != providers.processors.includes(seeder)) {
    provider = seeder
  } else if (undefined != providers.providersWithParams[seeder]) {
    provider = "fakerProxy"
  }
  return provider
}

function callFunction(seeder, providers, tempData) {
  let args = seeder.split(",")
  let fn
  const _provider = args.shift().trim()
  const provider = getProviderCallback(_provider, providers)

  args = processArgs(args)
  if (-1 !== providers.processors.indexOf(provider)) {
    fn = `${provider}(tempData,${args.join(",")})`
  } else if ("fakerProxy" == provider) {
    const fakerProvider = providers.providersWithParams[_provider]
    fn = `fakerProxy('${fakerProvider}',${args.join(",")})`
  } else if ("staticData" == provider) {
    fn = `staticData('${_provider}')`
  } else {
    fn = providers.providers[seeder]
  }
  return eval(fn)
}

function processArgs(args) {
  return args.map((item) => {
    if ("true" == item || true === item) {
      return true
    } else if ("false" == item || false === item) {
      return false
    } else {
      return `'${item.trim()}'`
    }
  })
}

function joiner(tempData, ...params) {
  return params.map((item) => tempData[item] ?? item).join("")
}
function joinerDot(tempData, ...params) {
  return params.map((item) => tempData[item] ?? item).join(".")
}
function joinerSpace(tempData, ...params) {
  return params.map((item) => tempData[item] ?? item).join(" ")
}
function joinerComma(tempData, ...params) {
  return params.map((item) => tempData[item] ?? item).join(",")
}

function joinerHash(tempData, ...params) {
  return params.map((item) => tempData[item] ?? item).join("#")
}

function prepend(tempData, ...params) {
  return params[0] + tempData[params[1]]
}

function append(tempData, ...params) {
  return tempData[params[1]] + params[0]
}

function randomNumber(min = 0, max = 100) {
  min = parseInt(min)
  max = parseInt(max)
  let n = faker.datatype.number(max)
  while (n < min) {
    n = faker.datatype.number(max)
  }
  return n
}

//this will return one random item from the list
function randomItem(...params) {
  return faker.helpers.randomize(params)
}

//this will return N number of items from the list, number of items varies from 0 to N
function randomItemNMax(n, ...params) {
  const length = randomNumber(1, n)
  params = faker.helpers.shuffle(params)
  return params.splice(0, length)
}

//this will return exactly N number of items from the list
function randomItemN(n, ...params) {
  const length = n
  params = faker.helpers.shuffle(params)
  return params.splice(0, length)
}

function year(min = 1900, max = 2200) {
  return randomNumber(min, max)
}

function slugify(tempData, item) {
  return faker.helpers.slugify(tempData[item].toLowerCase())
}

function emailDomain(domain = "example.com") {
  return faker.internet.email("", "", domain).toLowerCase()
}

function emailFromDomain(domain = "example.com") {
  return faker.internet.email("", "", domain).toLowerCase()
}

function emailFromNameAndDomain(tempData, fn, ln, domain = "example.com") {
  return faker.internet.email(tempData[fn], tempData[ln], domain).toLowerCase()
}
function timeMinuteSecond() {
  return Math.floor(Math.random() * 59) + ":" + Math.floor(Math.random() * 59)
}
function fakerProxy(provider, ...params) {
  params = processArgs(params)
  const fn = `${provider}(${params.join(",")})`
  return eval(fn)
}

function staticData(data) {
  return data
}

function unsplash(w = 800, h = 600, keyword = "smile") {
  return `https://source.unsplash.com/random/${w}x${h}?${keyword}`
}
