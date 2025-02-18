const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Rolls a dice!"),

  async execute(interaction) {
    const roll = Math.floor(Math.random() * 6) + 1;

    await interaction.reply(`:game_die: You rolled a **${roll}!**`);
  },
};
