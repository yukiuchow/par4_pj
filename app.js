const express = require('express')
const { type } = require('os')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello~ Welcome to Product List System!')
})

// Mock database
const product_list = [
    {
      Product_Type: 'Stationery',
      Product_ID: '123456',
      Product_Name: 'pen',
      Product_Price:'$8',
      Sold_Quantity:'50',
    },

    {
      Product_Type: 'technology_goods',
      Product_ID: '102345',
      Product_Name:'earphone',
      Product_Price:'100',
      Sold_Quantity:'25',  
    },

    {
        Product_Type:'toys',
        Product_ID:'112234',
        Product_Name:'plush doll',
        Product_Price:'50',
        Sold_Quantity:'100',
    
    }
  ];
  
  // Getting the list of users from the mock database
  router.get('/', (req, res) => {
      res.send(users);
  })
  
  export default router

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello~ Welcome to Product List System!'))

app.get('/', (req, res));


 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
