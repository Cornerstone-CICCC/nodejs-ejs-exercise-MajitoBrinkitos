"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Create server
const app = (0, express_1.default)();
//Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
//Middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Routes
app.use('/', page_routes_1.default); //Home
app.use('/about', page_routes_1.default); //About
app.use('/contact', page_routes_1.default); //Contact
//404 Fallback
app.use((req, res) => {
    res.status(404).render('404');
});
//Start Server
const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
