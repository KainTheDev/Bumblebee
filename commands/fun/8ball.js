const { Message, Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: ["8b"],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async ({message, args}) => {
    if (!args.length) {
      return message.reply('Please ask a question!');
    }

    const responses = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes, definitely.',
      'You may rely on it.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Don\'t count on it.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.',
      'Maybe.',
      'Nah.',
      'What? No bruh.',
      'I have no clue.',
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];

    const embed = new EmbedBuilder()
      .setColor(client.config.originalColor)
      .setTitle('🎱 8-Ball')
      .setDescription(`**Question:** ${args.join(' ')}\n**Answer:** ${response}`);

    message.reply({ embeds: [embed] });
  }
}