const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flip a coin!"),

  async execute(interaction) {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(":coin: Coin Flip")
      .setDescription(`You got: **${result}!**`)
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
