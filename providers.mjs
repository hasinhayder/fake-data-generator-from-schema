export default {
  "name": "faker.name.findName()",
  "maleName":"faker.name.findName('','',0)",
  "femaleName":"faker.name.findName('','',1)",
  "maleFirstName":"faker.name.firstName(0)",
  "femaleFirstName":"faker.name.firstName(1)",
  "maleLastName":"faker.name.lastName(0)",
  "femaleLastName":"faker.name.lastName(1)",
  "domain":"faker.internet.domainName()",
  "age":"faker.datatype.number(100)",
  "processors":[
    'joiner',
    'joinerSpace',
    'joinerDot',
    'joinerComma',
    'joinerHash',
    'append',
    'prepend',
    'randomNumber',
    'emailDomain'
  ]
}

