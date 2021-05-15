# Why?

Faker.JS is great for creating mock data, and it serves the purpose. However, to create a structured dataset you need to write too much code, and sometimes it gets boring. This is why I have created [this project](https://github.com/hasinhayder/fake-data-generator-from-schema) that can automate the mock-data creation process without you writing a single line of code. It was actually created for my personal projects and then I thought that it can add value to many other projects, especially those in need of mock data, and save a lot of time for everyone. Let me show you why this project is a necessary one in your toolkit and how it can be used in this short video tutorial.

Tutorial: https://www.youtube.com/watch?v=40cfvvrvmJg

Did I tell you that this software is really fast? It can create 1 million records in less than 15 seconds in most cases.  

you can even use **auto increment values** in your schema, just like this one 

```js
//schema.mjs
export default {
  // random 20 people with autoincrement id
  output:'./output.json',
  total:20,
  structure:{
    id:'autoIncrement',
    firstName: 'maleFirstName',
    lastName: 'maleLastName',
    email:'emailFromDomain,firstName,lastName,test.com',
    fullName:'joinerSpace,firstName,lastName',
  }
}

```

You can find some example schemas in the `example-schemas` directory. 

Pull requests, feature suggestions and issues are very welcome. 

## How 
```
yarn
```
Now modify `schema.mjs` and run
```
yarn generate
```