export default {
  //random studetns and their grade
  output:'./output.json',
  total:'10',
  structure:{
    firstName:'firstName',
    lastName:'lastName',
    name:'joinerSpace,firstName,lastName',
    email:'emailFromNameAndDomain,firstName,lastName,amazing.edu',
    grade:'11', //Static 11 or randomNumber,6,12
    section:'randomItem,Cherry,Rose,Gerbera',
    major:'randomItemN,2,physics,chemisty,math,english,geography',
    result:{
      return:'single',
      structure:{
        physics:'randomItem,A+,A,A-,B+,B,B-,C,D',
        chemisty:'randomItem,A+,A,A-,B+,B,B-,C,D',
        math:'randomItem,A+,A,A-,B+,B,B-,C,D',
        english:'randomItem,A+,A,A-,B+,B,B-,C,D',
        geography:'randomItem,A+,A,A-,B+,B,B-,C,D',
      }
    },
    remarks:'randomItem,good one,excellent and focussed,hardworking,need some caring at home,brilliant,very attentive,lack of attention in class'
  }
}
