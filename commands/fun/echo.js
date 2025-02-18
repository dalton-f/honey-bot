const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Make the bot say something")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to echo")
        .setRequired(true)
    ),

  async execute(interaction) {
    const message = interaction.options.getString("message");

    await interaction.reply(message);
  },
};
