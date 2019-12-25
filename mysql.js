var mysql = require('mysql');

var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'trafficAdmin',
    password: '123456',
    database: 'traffic',
});

exports = {
    connDB:(() => {
        conn.connect((err) => {
            if(err) throw err;
            console.log('connect succes!!');
            
        });        
    }),
    closeDB:() => {
        conn.end(function(err){
            if(err) throw err;
            console.log('connect end');
        }) 
    },
    readMsg:(room, condition) => {
        conn.query(`SELECT * FROM ${room} WHERE id = '6'`, (err, result, fields) => {
            if(err) throw err;
            console.log(result);
        })
    },
    createDataToCounty:(data) => {
        conn.query(`INSERT INTO county (county, location, image) VALUES ('${data.county}', '${data.location}','${data.image}') `, (err, result) => {
            if(err) throw err;
            console.log(result)

        })
    },
    updateMsg:(room,data) => {
        conn.query(`UPDATE ${room} SET name = '${data.name}', msg = '${data.msg}' WHERE id = ${data.id} `, (err, result) => {
            if(err) throw err;
            console.log(result);
        })
    },
    deleteMsg:(room,id) => {
        conn.query(`DELETE FROM ${room} WHERE id = ${id}`, (err, result) => {
            if(err) throw err;
            console.log(result);
        });
    }
    

};
