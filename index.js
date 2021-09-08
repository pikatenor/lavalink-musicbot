require("dotenv/config");
const bot = require("./src/bot");
const server = require("./src/server")(bot);
