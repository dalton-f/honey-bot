const { Events, ActivityType, Client } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,

  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    client.user.setPresence({
      activities: [
        {
          name: `honeyboo2313 streams`,
          type: ActivityType.Watching,
        },
      ],
      status: "online",
    });
  },
};
