const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const server = require('http').Server(app);

const Dbase =['traffic','retextnd_traffic']
const Admin =['trafficAdmin','retextnd_traffic']
const PORT = process.env.PORT || 3000


server.listen(PORT ,() => {
  console.log(PORT)
})
app.use(cors());






app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, 'dist')));



//sql//
  const mysql = require('mysql');

  const conn = mysql.createConnection({
      
      user: Admin[0],
      password: '123456',
      database: Dbase[0] ,
  });

  mysqlConnect = {
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
      readCounty:(d) => {
          
          conn.query(`SELECT * FROM county WHERE county = '${d.county}'`, (err, result, fields) => {
              if(err) throw err;
              
               
              
          });
          
          
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
      },
      createDataToTraffic:(data) => {
        conn.query(`INSERT INTO traffic (county, location, isHoliday, carTraffic, motorcycleTraffic) VALUES ('${data.county}', '${data.location}','${data.isHoliday}','${data.carTraffic}','${data.motorcycleTraffic}') `, (err, result) => {
            if(err) throw err;
            console.log(result)

        })
    },      
      

  };

  mysqlConnect.connDB();





app.use('/static', express.static(path.join(__dirname, 'dist','static')));



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))

  
})



app.post('/loction_data_find_county',(req, res) => {
  
  conn.query(`SELECT * FROM county WHERE county = '${req.body.county}'`, (err, result, fields) => {
    if(err) throw err;
    console.log(req.body)
    res.json(result);
  });
  console.log(req.body)
  
})





app.post('/loction_data', (req, res) => {
  console.log(req.body)
  res.json({status: 200})
  
  
  mysqlConnect.createDataToCounty(req.body);
  

})

app.post('/traffic_data', (req, res) => {
  console.log(req.body)
  mysqlConnect.createDataToTraffic(req.body);
  res.json({status: 200})

})

app.post('/find_traffic_data', (req, res) => {
  
   conn.query(`SELECT * FROM traffic WHERE location = '${req.body.location}'`, (err, result, fields) => {
     if(err) throw err;
     console.log(result)
     res.json(result);
   });
  

})



