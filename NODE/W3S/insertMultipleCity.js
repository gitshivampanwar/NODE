var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'mydb'
});

var sql = "INSERT INTO city (city_name,state) VALUES ?";

var values =[
    ['mumbai','maharastra'],
    ['lucknow','uttarpradesh'],
    ['udaypur','rajasthan'],
    ['banagalore','karanatka'],
    ['trivandpuram','kerela']
]
con.query(sql,[values],function(err,result){
if(err) throw err;
console.log("no. of rows affected:"+result.affectedRows);
});