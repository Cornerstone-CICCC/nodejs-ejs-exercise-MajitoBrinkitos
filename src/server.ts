// This is your server file :)
import express, { Request, Response } from 'express'
import path from 'path'
import pageRouter from './routes/page.routes'
import dotenv from 'dotenv'
dotenv.config()

//Create server
const app = express()

//Set view engine to EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

//Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', pageRouter) //Home
app.use('/about', pageRouter) //About
app.use('/contact', pageRouter) //Contact

//404 Fallback
app.use((req: Request, res: Response) => {
    res.status(404).render('404')
})

//Start Server
const PORT = process.env.PORT || 3600
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})