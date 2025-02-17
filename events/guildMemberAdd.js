// Client event which adds the "communtiy member" role whenever somebody joins the server
const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,

  async execute(member) {
    const role = "1338649001993568256";

    const giveRole = member.guild.roles.cache.get(role);

    await member.roles.add(giveRole);
  },
};
