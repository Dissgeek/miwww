import express from 'express';

import bodyParser from 'body-parser';

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

const app = express();
const PORT = 3000;





// parse application/x-www-form-urlencoded
// parse application/json
const isProduction = process.env.NODE_ENV === "production";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// define root route
app.get('/', (req, res)=>{
  res.send('Hello World');
});


// create employee routes
app.use('/api/v1/employee', employeeRoutes);

 
//applisten
app.listen(PORT, () => 

{console.log('Example app listening at http://localhost:',PORT)
console.log(`Server is running on isProductionss => ${isProduction}`);}
);