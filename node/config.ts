const {Client} = require('pg')
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"evital@1234",
    database:"template1"
})
export const config = client;
// client.connect();
// client.query('Select * from users',(err:any,res:any)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     client.end();
// })