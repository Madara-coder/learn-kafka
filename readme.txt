# Start Zookeeper Container and expose PORT 2181.
docker run -p 2181:2181 zookeeper -d

# Start Kafka Container, expose PORT 9092 and setup ENV variables.
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka

NOTE: Only used for the old version of the kafka where zookeeper was used.

FOR INITIALIZING NODE:
yarn init

FOR IMPORTING KAFKA PACKAGE IN JS:
yarn add kafkajs