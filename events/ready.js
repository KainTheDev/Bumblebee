const client = require("../index");

const {ActivityType} = require("discord.js")
  client.once('ready', () => {
    console.log(client.user.tag)
    console.log('Bot - status: ✅');
    client.user.setPresence({
  activities: [{ name: `Jazz`, type: ActivityType.Playing }],
  status: 'idle',
});
  });
