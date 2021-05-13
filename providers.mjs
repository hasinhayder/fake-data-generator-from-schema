export default {
  providers: {
    name: 'faker.name.findName()',
    maleName: "faker.name.findName('','',0)",
    femaleName: "faker.name.findName('','',1)",
    femaleFirstName: 'faker.name.firstName(1)',
    femaleLastName: 'faker.name.lastName(1)',
    maleFirstName: 'faker.name.firstName(0)',
    maleLastName: 'faker.name.lastName(0)',
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
    zipCode: 'faker.address.zipCode()',
    cityPrefix: 'faker.address.cityPrefix()',
    citySuffix: 'faker.address.citySuffix()',
    city: 'faker.address.city()',
    cityName: 'faker.address.cityName()',
    streetName: 'faker.address.streetName()',
    streetSuffix: 'faker.address.streetSuffix()',
    streetPrefix: 'faker.address.streetPrefix()',
    secondaryAddress: 'faker.address.secondaryAddress()',
    county: 'faker.address.county()',
    country: 'faker.address.country()',
    state: 'faker.address.state()',
    stateAbbr: 'faker.address.stateAbbr()',
    latitude: 'faker.address.latitude()',
    longitude: 'faker.address.longitude()',
    direction: 'faker.address.direction()',
    cardinalDirection: 'faker.address.cardinalDirection()',
    ordinalDirection: 'faker.address.ordinalDirection()',
    nearbyGPSCoordinate: 'faker.address.nearbyGPSCoordinate()',
    timeZone: 'faker.address.timeZone()',
    //animal
    dog:'faker.animal.dog()',
    cat:'faker.animal.cat()',
    snake:'faker.animal.snake()',
    bear:'faker.animal.bear()',
    lion:'faker.animal.lion()',
    cetacean:'faker.animal.cetacean()',
    horse:'faker.animal.horse()',
    bird:'faker.animal.bird()',
    cow:'faker.animal.cow()',
    fish:'faker.animal.fish()',
    crocodilia:'faker.animal.crocodilia()',
    insect:'faker.animal.insect()',
    rabbit:'faker.animal.rabbit()',
    type:'faker.animal.type()',
    //commerce
    color:'faker.commerce.color()',
    department:'faker.commerce.department()',
    productName:'faker.commerce.productName()',
    productAdjective:'faker.commerce.productAdjective()',
    productMaterial:'faker.commerce.productMaterial()',
    product:'faker.commerce.product()',
    productDescription:'faker.commerce.productDescription()',
    //database
    column:'faker.database.column()',
    type:'faker.database.type()',
    collation:'faker.database.collation()',
    engine:'faker.database.engine()',
    //data types
    number:'faker.datatype.number()',
    float:'faker.datatype.float()',
    datetime:'faker.datatype.datetime()',
    string:'faker.datatype.string()',
    uuid:'faker.datatype.uuid()',
    hexaDecimal:'faker.datatype.hexaDecimal()',
    boolean:'faker.datatype.boolean()',
    json:'faker.datatype.json()',
    array:'faker.datatype.array()',
    //date
    
    between:'faker.date.between()',
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
    streetAddress: 'faker.address.streetAddress',
    countryCode: 'faker.address.countryCode', //param default=alpha-2, accepts alpha-3
    price:'faker.commerce.price', //min, max, dec, symbol
    past:'faker.date.past',//years,dateRef
    future:'faker.date.future',//years,dateRef
    between:'faker.date.between', //from,to
    betweens:'faker.date.betweens', //from,to
    recent:'faker.date.recent', //days.dateRef
    soon:'faker.date.soon', //days.dateRef
    month:'faker.date.month', //days.dateRef
    weekday:'faker.date.weekday', //days.dateRef
  }
}
