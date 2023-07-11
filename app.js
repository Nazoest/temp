/* const amount =9

if(amount<10){
    console.log("It'S a small number")
}else{
    console.log('large number')
}

console.log(`hey its my first node  ${amount}`) */

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello,Nathan"S World!');
  });

app.get('/about',(req,res)=>{
    res.send('about page')
})

  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

  app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
    next();
  });
  
console.log(__dirname,__filename)

