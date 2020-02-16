const Express = require("express");
const App = Express();
const port = 80;
const pokemon = require('json-pokemon');
const chalk = require("chalk");



App.use("/public",Express.static("public"));

//find id in pokemon array
App.get("/id/:id", function(req, res){
    let result = {"error":"Not able to find ID of Pokemon"};

    pokemon.forEach((value)=>{
        if(value.id == req.params.id){
            result = value;
        }

    });
    if(result.error){
        console.log(chalk.red(req.path));
        res.json(result);

     }
     else{
        console.log(chalk.green(req.path));
         res.json(result);
        }
});



//Find name in pokemon in segment 
App.get("/name/:name", function(req, res){
    let result = {"error":"Not able to find Name of Pokemon"};
    
    pokemon.forEach((value)=>{
        if(value.name == req.params.name){
            result = value;
        }
    });
   
    if(result.error){
        console.log(chalk.red(req.path));
         res.json(result);
     }
     else{
        console.log(chalk.green(req.path));
         res.json(result);
        }
});


//console log  so it shows when request is given.
App.get("/", function(req, res){
    console.log("Recieved request");
    res.json();
 });


 //listen on port 80 
App.listen(port, function(){
    console.log("Server is running");
   } 

);