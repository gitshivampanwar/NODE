var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'mydb'
})

con.connect(function(err){
    if(err) throw err;
    console.log('connected');
    var sql = "INSERT INTO  customers (name,address) VALUES ('shivam' , 'delhi')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('inserted');
    })

})