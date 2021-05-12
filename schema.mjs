export default {
  // total:'random',
  output:'./data.json',
  total:'10',
  types:{
    'firstName': 'maleFirstName',
    'lastName': 'maleLastName',
    'email':'emailDomain,test.com',
    'fullName':'joinerSpace,firstName,lastName',
    father:{
      return:'single',
      types:{
        'firstName':'maleFirstName',
        'lastName':'maleLastName',
      }
    },
    mother:{
      return:'single',
      types:{
        'firstName':'femaleFirstName',
        'lastName':'femaleLastName',
      }
    },
    'siblings':{
      skips:['domain'],
      total:'random',
      limit:3,
      // total:1,
      types:{
        'firstName':'firstName',
        'lastName':'lastName',
        'domain':"domain",
        'email':'joiner,firstName,.,lastName,@,domain',
        'fullName':'joinerSpace,firstName,lastName',
      }
    },
    
  }
}
