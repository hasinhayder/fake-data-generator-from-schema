export default {
  // total:'random',
  output:'./output.json',
  total:20,
  skips:['domain'],
  structure:{
    id:'autoIncrement',
    firstName: 'maleFirstName',
    lastName: 'maleLastName',
    age:'randomNumber,1,100',
    domain:'domain',
    email:'joiner,firstName,.,lastName,@,domain',
    secondaryEmail:'emailDomain,test.com',
    fullName:'joinerSpace,firstName,lastName',
    father:{
      return:'single',
      types:{
        firstName:'maleFirstName',
        lastName:'maleLastName',
      }
    },
    mother:{
      return:'single',
      types:{
        firstName:'femaleFirstName',
        lastName:'femaleLastName',
      }
    },
    siblings:{
      skips:['domain'],
      total:'random',
      limit:3,
      // total:1,
      structure:{
        id:'autoIncrement',
        firstName:'firstName',
        lastName:'lastName',
        domain:'domain',
        email:'joiner,firstName,.,lastName,@,domain',
        fullName:'joinerSpace,firstName,lastName',
      }
    },
    
  }
}
