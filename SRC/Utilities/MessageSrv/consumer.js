var fs = require('fs');

module.exports = function(params) {
    console.log("Inside messageConsumer method ---->",JSON.stringify(params))
    var stream = activeMQConnect.receiver(params.recieverName).attach(params.queueName);
    stream.on('data',function(message) {      
        var temp = message.payload;
        var str = JSON.parse(temp.toString());
        console.log("message is---->",str)
        //performing task on the message 
        fs.appendFile('consumer.txt',JSON.stringify(str)+"\n", function (err) {
            if (err) throw err;
            message.done(); 
            console.log('added in file');
        });
	});
}







