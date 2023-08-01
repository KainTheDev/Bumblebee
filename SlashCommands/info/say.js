const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "say",
    description: "Want me to send something?",
    type: 1,
    options: [
      {
        name: "input",
        description: "The text you want me to send",
        required: true,
        type: 3
      }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async ({client, interaction, args}) => {
        interaction.reply({ content: "Message sent!", ephemeral: true });
        interaction.channel.send({content: args.join(" ")})
    },
};
