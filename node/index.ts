import {config} from './config'
const express = require('express');
// const {Client} = require('pg')
const app = express();

app.listen(3000, ()=>{
    console.log('server started.');
})
// config.connect();
// config.query('Select * from users',(err:any,res:any)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     config.end();
// })