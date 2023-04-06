const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()

const app = express()

// to get body data through post method
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//list of api end point
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//use overwritten default express middleware
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))


// ----full length route------
// app.use('/api/goals/:id', (req,res) => {res.status(200).json({message: `Update goal ${req.params.id}})})

// ----After adding routers folder--------
// app.use('/api/goals', require('./routes/goalRoutes'))
// router.put('/:id', require(res.status(200).json({message: `Update goal ${req.params.id}`})))
// router.put('/:id', updateGoal)

// router.route('/:id').put(updateGoal).delete(deleteGoal)

// ----After adding controllers folder------
// app.use('/api/goals', require('./routes/goalRoutes'))
// router.put('/:id', updateGoal)
// const updateGoal = (req, res) => {res.status(200).json({message: `Update goal ${req.params.id}`})}