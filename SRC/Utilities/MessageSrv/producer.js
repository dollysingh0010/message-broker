require('dotenv').config();



module.exports = function(params) {
    return new Promise(function(resolve, reject) {
        console.log("inside produceMessages---->",params)
        if(!global.connectionState) {                                      
           console.log("Activemq server is down",global.connectionState)  // sending error response if activemq server is not up
        }
            var payload = Buffer.from(JSON.stringify(params.message));
            var message = { 
                payload : payload,
                target: {
                    header: {
                        durable: params.durable || true,
                        priority: params.priority || 3,
                        ttl: params.ttl || null
                    },
                },
                done: () => {
                    console.log("Message was published");
                    return resolve("Message generated successfully");
                },
                failed: (err) => {
                    console.log("Message publishing failed,", err);
                    return reject("Error in genreting message")
                }
            }       
            //Data to be write in message broker
            const stream = activeMQConnect.sender(params.senderName).attach(params.queueName);
            stream.write(message); 
            stream.end();
        
        
    })
}







