import express from "express";
import connect from './config/mongoose.js'
import router from './routes/index.js'

const app = express();

// middleware
app.use(express.json({limit: '50mb'}));

app.disable('x-powered-by');// less hackers know about our stack (Remove the X-Powered-By headers);

const port = process.env.PORT || 8000;

// HTTP get Request
app.get('/', (req, res) => {
    res.status(201).json("Hey everything working fine This is Home GET Request");
})

// api routes 

app.use('/', router);

// Error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message});
});

// start server only we have databse valid connection 
connect().then(() => {
    try {
        app.listen(port, (err) => {
            if (err) console.log("Error in Backend server start");
            console.log(`Server connected to port :${port}`);
        })

    } catch (err) {
        console.log(`Cannot connect to the server ${err}`)
    }
}).catch(err => {
    console.log(`Invalid database connection... ${err}`)
})


