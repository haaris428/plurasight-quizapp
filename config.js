var config = {}

config.mongodb = {}
config.server_name = "localhost";
config.server_port = process.env.PORT || 3000;
config.mongodb.server_name = process.env.MONGOLAB_URI || "localhost:27017";
config.mongodb.server_port = "27017";


module.exports = config;
