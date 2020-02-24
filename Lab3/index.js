const Express=require("express");
const App=Express();
const port =8080;
App.use(Express.static("public"));

App.get("/public",function(req,res){
    res.send("Hello , WORLD");
});

App.listen(port,function(){
    console.log("Server Running!");

});
