let express = require('express')
let router = express.Router()
//^^will create an object that understands how to match different requests to different paths with
//different functions that can respond to those requests.

router.get('/', function (req, res, next){
    res.json({ 'message': 'Hi Professor James, this is magic!'} )
})

//router.get means "configure a route that is a get request (a request that fetches data)".
//path is forward slash: /
//this function will run to provide a response.
//      3 arguments:
//          req = request the client has made
//          res = response the server sends back (example response = res.json() )
//                    IN other servers, you can use res to return html webpages, or binary files, or images
//          next **not used here.

module.exports = router
//(same variable as above *router*)
//this means another file will be able to include or require this file, and it will be able to access
//  the router object that has been configured with the mapping of path ('/')to function
//  (path = '/'), function (req,res,next)