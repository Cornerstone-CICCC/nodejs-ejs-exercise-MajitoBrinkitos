"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
//Home Page
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', {
        title: "Travelo Official Website",
        welcomeMessage: "Your Next Vacation awaits for you  ",
        showYear: true
    });
});
//About Page
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: "About Us"
    });
});
//Contact Page
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        contacts: ["contact@example.com", "555-5555", "Burnaby, Canada"]
    });
});
exports.default = pageRouter;
