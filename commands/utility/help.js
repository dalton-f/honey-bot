const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Returns this list of the bot commands"),

  async execute(interaction) {
    const commands = interaction.client.commands;
    let commandList = "";

    commands.forEach((command) => {
      commandList += `**/${command.data.name}**: ${command.data.description}\n`;
    });

    const embed = new EmbedBuilder()
      .setTitle("Honey Bot - Info")
      .setDescription(
        `Honey Bot is a multipurpose discord bot made by @Dalton. This command shows information about all the commands you can run using this bot.\n\n**Commands:**\n\n${commandList}`
      )
      .setColor("#ce98ec")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
