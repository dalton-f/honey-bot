const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),

  async execute(interaction) {
    const joinedDate =
      interaction.member.joinedAt.toDateString() +
      " at " +
      interaction.member.joinedAt.toLocaleTimeString();

    await interaction.reply(
      `This command was run by **${interaction.user.globalName}**, who joined on **${joinedDate}**.`
    );
  },
};
