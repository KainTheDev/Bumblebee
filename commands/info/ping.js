const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ['p'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async ({ client, message }) => {
    try {
      const pingMessage = await message.reply("🏓 Pinging...");

      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("🏓 Pong!")
        .addField("Bot Latency", `${pingMessage.createdTimestamp - message.createdTimestamp}ms`)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();
      
      await pingMessage.edit({ embeds: [embed] });
    } catch (err) {
      console.error("Error while executing ping command:", err);
      message.channel.send("An error occurred while running the command.");
    }
  }
}