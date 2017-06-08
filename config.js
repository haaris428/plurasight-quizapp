var config = {}

config.mongodb = {}
config.server_name = "localhost";
config.server_port = process.env.PORT || 3000;
config.mongodb.server_name = process.env.MONGOLAB_URI || "mongodb://localhost:27017";


module.exports = config;
