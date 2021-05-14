export default {
  //random studetns and their grade
  output:'./output.json',
  total:'20',
  structure:{
    title:'sentence',
    slug:'slugify,title',
    author:'randomItem,Tricia Feest,Billy Joel,Lola Haag,Melinda Mraz',
    authorSlug:'slugify,author',
    excerpt:'sentence,30',
    content:'sentences,20',
    featuredImage:'unsplash,800,600,happy+people',
    category:'randomItemNMax,3,food,sports,news,architecture,science,space',
    comments:{
      total:'random',
      limit:5,
      structure:{
        name:'name',
        comment:'sentence',
        date:'past'
      }
    }
  }
}
