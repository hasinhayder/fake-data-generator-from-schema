export default {
  // random 20 people with autoincrement 
  output:'./output.json',
  total:7,
  structure:{
    id:'autoIncrement',
    cid:'uuid',
    title: 'words,5',
    description:'sentence',
    episodes: {
      total:'random',
      limit:7,
      structure:{
        id:'uuid',
        title:'words,5',
        duration:'timeMinuteSecond',
        bookmarked:'boolean',
        completed:'boolean',
        note:'unsplash,,,happy',
        download:'unsplash,,,cute',
        video:{
          total:1,
          structure:{
            type:'randomItem,youtube,vimeo,wistia,self',
            url:'unsplash,,,landscape'
          }
        }
      }
      // duration:'timeMinuteSecond',
    }
  }
}
