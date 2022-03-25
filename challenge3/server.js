const express = require ('express')
const expressLayouts = require ('express-ejs-layouts') 
const app = express ()
const port = 1500

// setup view engine
app.set('view engine', 'ejs')
// setup public folder
app.use(express.static ('public') )
// setup ejs layouts
app.use(expressLayouts)

// default route
app.get('/', (req, res) => {
    res.render('index')
})
// listener
app.listen(port, ()=>{
    console.log(`localhost: ${port} is running`)
})





module.express = app