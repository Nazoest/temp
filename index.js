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
const _ =require('lodash')

const items=[1,[2,[3,[3,[4]]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)