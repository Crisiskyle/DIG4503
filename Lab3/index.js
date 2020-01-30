const Express=require("express");
const App=Express();
const port =8080;
App.use(Express.static("public"));

App.listen(port,function(){
    console.log("Server Running!");

});
