/**
 * Created by zhagnian on 16-8-5.
 */
let route=require('./route');
let readline=require('readline');
function connectToRoute(line){
    let response=route(line);
    console.log(response.text);
    if(response.rerun)
    {
        connectToRoute(line);
    }
}

//connectToRoute();
module.exports=function(){
    let listener=readline.createInterface({

        input:process.stdin,
        output:process.stdout,
        terminal: false
    });

    listener.on('line',function (line){
        connectToRoute(line);

    });
    connectToRoute();

};