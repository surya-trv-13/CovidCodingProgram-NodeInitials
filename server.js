var app = require('express')();
var hbs = require('hbs');

// var app = express();
app.set('view engine', 'hbs');

//Registering the partials
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('UPPER' , (text) => {
    return text.toUpperCase();
});

hbs.registerHelper('CurrentYear' , () => {
    return new Date().getFullYear();
})


app.use((req , res , next) =>{
    console.log(`${new Date().toString()} : ${req.method} ${req.url}`);
    next();
});
// app.get('*', (req , res) => {
//     res.render('404' , {
//         headPart:'PAge not Found',
//         paraPart : 'Check Other Routes'
//     })
// });
app.use((req , res , next) => {
    // res.render('maintain.hbs');
});

app.use(require('express').static(__dirname + '/public'));
app.get('/' ,(req ,res) => {
    res.render('Master.hbs' , {
        headPart : 'HOME PAGE',
        paraPart : 'Welcome to my Website'
    });
});

app.get('/about' , (req,res) => {
    res.render('about.hbs' , {
        headPart : 'About Page',
        paraPart : `This is paragraph ${new Date().toString()}`
    })
    // res.send('<h1>About Page</h1>');
})

app.listen(3100, () =>{
    console.log('Server is running in 3100');
    
})