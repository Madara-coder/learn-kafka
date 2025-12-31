const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log("Connecting to Kafka broker...");
    admin.connect();
    console.log("Connected Successfully");

    console.log("Creating Topics...");
    await admin.createTopics({
        topics: [{
            topic: "rider-update",
            numPartitions: 2,
        }]
    });
    console.log("Topics Created Successfully");

    console.log("Disconnecting from Kafka broker...");
    await admin.disconnect();
}

init();