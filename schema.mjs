export default {
  // total:'random',
  output:'./output.json',
  total:'10',
  types:{
    skips:['domain'],
    firstName: 'maleFirstName',
    lastName: 'maleLastName',
    domain:'domain',
    email:'joiner,firstName,.,lastName,@,domain',
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
      types:{
        firstName:'firstName',
        lastName:'lastName',
        domain:'domain',
        email:'joiner,firstName,.,lastName,@,domain',
        fullName:'joinerSpace,firstName,lastName',
      }
    },
    
  }
}
