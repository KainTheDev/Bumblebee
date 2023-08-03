const client = require("../index");

client.on("messageCreate", async (message) => {
    if(message.guild.name !== "CLIMAX") return;
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run({client, message, args});
    const logsChannel = message.guild.channels.cache.find(ch => ch.name === "bot-logs")
    logsChannel.send(`<@${message.author.id}> - **COMMAND USAGE**:\n> command: \`${client.config.prefix}${command.name}\`\n> args: \`\`\`${args.join(" ") || "[NO ARGS]"}\`\`\`\n> channel: <#${message.channel.id}>`)
});
