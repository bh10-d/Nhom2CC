const http = require('http');
const app = require("express")();
const path = require("path");


// //view engine setup
app.set("views", path.join(__dirname, "resource/views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

app.get("/", (req, res) => {
	let peopleList = getRandomList();
	res.render("index", { people: peopleList }); //passing list of people to our index.hbs file.
	
	// res.render("index", { people: {
	// 	"nhom2":"nhom2",
	// 	"lab": "cang day"
	// } }); //passing object-property

	// 	res.render("index", { people: [
	// 		{nhom2: "nhom2"},
	// 		{nhom2: "cang day"}
	// 	],
	// prefix: "hello" });// changing the context
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'application/json');
	// res.end("{message: 'nhom2'}")
});

let getRandomList = () => {
	let list = ["ada", "turing", "lovelace", "neumann", "gracehopper"];
	let limit = Math.floor(Math.random() * (list.length - 1 - 0) + 0); //generating random number between 0 & 4
	return list.slice(limit);
};
app.listen(3000);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.get('/home',(req, res) => {
//     res.send('Hello World, This is home router');
// });

// app.get('/profile',(req, res) => {
//     res.send('Hello World, This is profile router');
// });

// app.get('/login',(req, res)=>{
//     res.send('Hello World, This is login router');
// });

// app.get('/logout',(req,res)=>{
//     res.send('Hello World, This is logout router');
// });


// app.use((req, res, next) => {
//     console.log('Time: ', Date.now());
//     next();
// })

// app.get('/home',(req, res) => {
//     res.send('Home Page')
// })

// app.listen(3000);
// console.log('Webserver is running on port: '+3000);

//Template Engine //Custom handlebars for npm i express-handlebars
// app.engine('.hbs', engine({extname: '.hbs'}));
// app.set('view engine', 'hbs');
// app.set('view', path.join(__dirname, 'views'));

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Nhom 2 xin chao cac ban</h1>')
// });

// server.listen(3000,()=>{
//     console.log("Server is running on: "+3000);
// })