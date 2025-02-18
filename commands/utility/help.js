const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Returns a list of the bot commands"),

  async execute(interaction) {
    await interaction.reply("TODO: List of commands");
  },
};
