const {kafka} = require('./client');

async function init() {
    const producer = kafka.producer();

    console.log("Connecting to Producer...");
    await producer.connect();
    console.log("Producer Connected Successfully");

    await producer.send({
        topic: "rider-updates",
        messages: [
            {key: "location-update", value: JSON.stringify({
                // Rider's current location
            })},
        ],
    });
}