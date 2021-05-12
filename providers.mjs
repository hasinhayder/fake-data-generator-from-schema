export default {
  "name": "faker.name.findName()",
  "maleName":"faker.name.findName('','',0)",
  "femaleName":"faker.name.findName('','',1)",
  "firstName":"faker.name.firstName()",
  "maleFirstName":"faker.name.firstName(0)",
  "femaleFirstName":"faker.name.firstName(1)",
  "lastName":"faker.name.lastName()",
  "maleLastName":"faker.name.lastName(0)",
  "femaleLastName":"faker.name.lastName(1)",
  "email":"faker.internet.email()",
  "domain":"faker.internet.domainName()",
  "emailDomain":"emailDomain",
  "processors":[
    'joiner',
    'joinerSpace',
    'joinerDot',
    'joinerComma',
    'joinerHash',
    'append',
    'prepend',
  ]
}

