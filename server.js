let express = require('express')
//require the new routes path we just created in routes.js
let routes = require('./routes/routes')

//tell this (server.js) file where the dist directory is by serve this dist
// directory a "static file"
// (created when done with set up by stopping the localhost:8080 server
// with ctrl-c and running "npm run build")
let path = require('path')

//create web app: (yes, that's all is required:)
let app = express()

//***Setting up express server serving up the vueApp code:***

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')
//create a variable to represent the express app:
let vueApp = express.static(pathToVueApp)

//if someone goes to the homepage of our app, they will see the vueApp
app.use('/', vueApp)

//tell app to use the route we just created:
app.use('/api', routes)

//start the server running:
//have app listen to requests on a particular port: (if the computer has specified a specific port to use,
//  use that, otherwise use 3000.
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})

//go back to terminal, in first_express_api, type: node server.js,
//then go to browser(chrome) and type: 127.0.0.1:3000
//response: Cannot GET /
//means we haven't configured anything to response to node.js yet.
//try in browser (chrome): type in: 127.0.0.1:3000/api
//response: {"message":"hello!"}