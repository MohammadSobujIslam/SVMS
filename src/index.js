const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 5000

const usersRouter = require('./api/users/router')


app.use(cors())
app.use(morgan('common'))
app.use(express.json({ extended: true }))

app.get('/', (req, res) => {
	res.send("Hello smart village.")
})

app.use('/api/users', usersRouter)

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})


