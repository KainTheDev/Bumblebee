const { Message, Client } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ['send'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async ({client, message, args}) => {
      if(args.length === 0) return message.reply(`\`${client.config.prefix}say [text]\``).then(msg => setTimeout(() => msg.delete()))
      try {
        message.delete()
        message.channel.send(args.join(" ").split("\\").join(" "));
      } catch (err) {
      console.error("Error while executing ping command:", err);
      message.channel.send("An error occurred while running the command.");
    }
    },
};
