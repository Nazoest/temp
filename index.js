/* 
setInterval(()=>{
    console.log("Hello Nathan")
},1000) */

//1.globals
//2.modules-we split code into modules instead of writing in one file

/* const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-mind-grenade')

 */
//sayHi('susan')
//sayHi(names.john)
//sayHi(names.peter)

//-built in modules:::1.os 2.Path 3.fs 4.http.....

//http module basics of course
/* const _ =require('lodash')

const items=[1,[2,[3,[3,[4]]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
console.log("hello world") */


//
/* console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
 */
const { readFile, writeFile } = require('fs');
const { resolve } = require('path');
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/* getText('./content/first.txt')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  }); */
  
  const start=async()=>{
    try{
    const first= await readFilePromise('./content/first.txt','utf-8')
    const second=await readFilePromise('./content/second.txt','utf-8')
    await writeFilePromise('./content/result-mind-grenade.txt',`This is AWESOME:${first}::${second},{flag: 'a'}`)
    console.log(first,second)
}catch(error){
    console.log(error)
}
    
  }
  start()