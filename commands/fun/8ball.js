const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Answers a yes or no question")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("The question you want to ask the 8ball")
        .setRequired(true)
    ),

  async execute(interaction) {
    const responses = [
      "Yes.",
      "No.",
      "Maybe.",
      "Ask again later.",
      "Definitely.",
      "I don't think so.",
      "Absolutely!",
      "Not sure.",
    ];

    const question = interaction.options.getString("question");
    const response = responses[Math.floor(Math.random() * responses.length)];

    await interaction.reply(
      `**Question:** ${question}\n**Answer:** ${response}`
    );
  },
};
