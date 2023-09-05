var http=require('http')
let port=4000
http.createServer( function (req,res){
    // if(req.url=='/home'){

    //     res.writeHead(200,{'Content-type':'text/html'})
    //     res.end('<h1>welcome</h1>')
    // }
    // else if(req.url=='/about'){
    //     res.write('about page')
    //     res.end()
    // }
  
    if(req.url=='/home'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end('<h1>Welcome</h1>')
    }
    else if(req.url=='/about'){
        res.write('about pageee')
        res.end()
    }
}).listen(port,()=>{
    console.log(`listening on ${port}`);
})