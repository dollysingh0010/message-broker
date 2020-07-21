var activeMq = require("./app.js")

//Sample to call message producer
var message = {
    message : {
        name : "user",
        age  : 15,
        city : "Bangalore"
    },
    senderName : "test",
    queueName  : "queue1",
    priority   : 6,
    ttl        :100000000,
    durable    : true
}
activeMq.sendData(message).then(function(msgRes) {
    console.log("Message publish successfully",msgRes);
}).catch(function(err) {
    console.log("error is in produceMessages method--->",err);
    
})

//Sample to call consumer method
var params = {
    recieverName : "test",
    queueName    : "queue1"
}
activeMq.recieveData(params);


