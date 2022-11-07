const express = require('express')
const bodyParser = require('body-parser');
const { application } = require('express'); 
// const { MongoClient } = require('mongodb');
const app = express()
app.use(bodyParser.json());




// async function main() {
//     const uri = "mongodb+srv://<NosiphiwoB>:<biyela0305!>@<https://data.mongodb-api.com/app/data-fjccf/endpoint/data/v1>/test?retryWrites=true&w=majority";
    
//     const client = new MongoClient(uri);

//  try {   
//     await client.connect();

//     await listDatabases(client);
//  }catch (e) {
//     console.log(e);
//  }finally {
//     await client.close();
//  }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin.listDatabases();

//     console.log("Databased:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


const books = [
    {description:"Hlomu the Wife is essentially a love story",
     bookName:"Hlomu the Wife",
     barCode:"5476"}, 
    {description:"Orphaned as a child, Jane has felt an outcast her whole young life",
     bookName:"Jane Eyre",
     barCode:"8759"
    }
]

app.get('/', (req, res) => {
    res.json(books)
})

app.get('/:barCode', (req, res) => {
    let barCode = req.params.barCode
    const foundBook = books.filter(book => book.barCode == barCode)
    res.json(foundBook)
})

app.post('/', (req, res) => {
    console.log('req', req.body)
    application.push(req.body) 
    res.send()
})

app.put('books/:barCode', (req, res) => {
    
})


app.listen(4001, () => { console.log("server running on port 4001") })
