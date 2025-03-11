import { Router, Request, Response } from 'express'
const pageRouter = Router()

//Home Page
pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render('index', {
        title: "Travelo Official Website",
        welcomeMessage: "Your Next Vacation awaits for you",
        showYear: true
    })
})

//About Page
pageRouter.get('/about', (req: Request, res: Response) => {
    res.status(200).render('about', { 
        title: "About Us"
    })
})

//Contact Page
pageRouter.get('/contact', (req: Request, res: Response) => {
    res.status(200).render('contact', {
        contacts: ["contact@example.com", "555-5555", "Burnaby, Canada"]
    })
})

export default pageRouter