const { Client, GatewayIntentBits } = require("discord.js");

const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commandHandler = require("./handlers/commandHandler");
const eventHandler = require("./handlers/eventHandler");

(async () => {
  // Run the command and event handler everytime the bot restarts
  await commandHandler(client);
  eventHandler(client);

  // Log in to Discord with your client's token
  client.login(token);
})();
