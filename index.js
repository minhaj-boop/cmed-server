require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

app.use(cors({
    origin: 'https://cmed-client.vercel.app', // Allow only this origin
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
}));

//database connection
connection();

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log("Server is listening at " + PORT))

// app.get("/", (req, res) => {
//     res.json({ message: "server is running" })
// })


