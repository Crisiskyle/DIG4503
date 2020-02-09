const Express = require("express");
const App = Express();
const port = 80;
const pokemon = require('json-pokemon');
const chalk = require("chalk");

let result = {"error":"Pokemon Not "};


App.get("/id/:id", function(req, res){
    pokemon.forEach((value)=>{
        if(value.id ==req.params.id){
            result = value;
        }
    });
        if(result.error){
            console.log(chalk.red(req.path));
        }

        else{
            console.log(chalk.green(req.path));
            res.send(result);
        }
});

App.get("/name/:name", function(req, res){
    pokemon.forEach((value)=>{
        if(value.name ==req.params.name){
            result = value;
        }
    });

        if(result.error){
            console.log(chalk.red(req.path));
        }

        else{
            console.log(chalk.green(req.path));
            res.send(result);
        }

        });

App.listen(port, function(){
    console.log("Server is running");
   } 

);