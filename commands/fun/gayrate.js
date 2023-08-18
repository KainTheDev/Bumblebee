const { Message, Client } = require("discord.js");
const {randomNumber} = require("multi-purpose")
module.exports = {
    name: "gayrate",
    aliases: ['gr'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: ({client, message, args}) => {
        randomNumber(50).then(async () => {

        })
    }
};
