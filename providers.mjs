export default {
  providers: {
    name: 'faker.name.findName()',
    maleName: "faker.name.findName('','',0)",
    femaleName: "faker.name.findName('','',1)",
    maleFirstName: 'faker.name.firstName(0)',
    femaleFirstName: 'faker.name.firstName(1)',
    maleLastName: 'faker.name.lastName(0)',
    femaleLastName: 'faker.name.lastName(1)',
    domain: 'faker.internet.domainName()',
    age: 'faker.datatype.number(100)',
    jobTitle: 'faker.name.jobTitle()',
    jobDescriptor: 'faker.name.jobDescriptor()',
    jobArea: 'faker.name.jobArea()',
    jobType: 'faker.name.jobType()',
    //company
    companyName: 'faker.company.companyName()',
    companySuffix: 'faker.company.companySuffix()',
    catchPhrase: 'faker.company.catchPhrase()',
    catchPhraseDescriptor: 'faker.company.catchPhraseDescriptor()',
    catchPhraseAdjective: 'faker.company.catchPhraseAdjective()',
    catchPhraseNoun: 'faker.company.catchPhraseNoun()',
    bs: 'faker.company.bs()',
    bsAdjective: 'faker.company.bsAdjective()',
    bsNoun: 'faker.company.bsNoun()',
    bsBuzz: 'faker.company.bsBuzz()',
    suffixes: 'faker.company.suffixes()',
    //address
    zipCode: 'faker.address.zipCode()'
  },
  processors: [
    'joiner',
    'joinerSpace',
    'joinerDot',
    'joinerComma',
    'joinerHash',
    'append',
    'prepend',
    'randomNumber',
    'emailDomain'
  ],
  providersWithParams: {
    zipCodeByState: 'faker.address.zipCodeByState',
    streetAddress: 'faker.address.streetAddress'
  }
}
