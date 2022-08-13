const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pbddk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {

    await client.connect();
    const reviewsCollection = client.db('Ticket-Kato').collection('reviews');
    const BusCollection = client.db('Ticket-Kato').collection('BusInfo');

    app.post('/reviews', async (req, res) => {
      const reviews = req.body;
      const result = await reviewsCollection.insertOne(reviews);
      res.send(result);
    })
    app.get('/reviews', async (req, res) => {
      const query = {};
      const cursor = reviewsCollection.find(query);
      const reviews = (await cursor.toArray()).reverse();
      console.log(reviews)
      res.send(reviews);
    });
    app.get('/busInfo',async(req,res)=>{
      const query={}
      const cursor=BusCollection.find(query);
      const buses=await cursor.toArray()
      res.send(buses);

    })
    //dfdfdfdfdf
    //ggggggg
  }
  finally {
  }
}
//dsdsdsd
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello From Ticket Kato')
})

app.listen(port, () => {
  console.log(`Ticket Kato app listening on port ${port}`)
})