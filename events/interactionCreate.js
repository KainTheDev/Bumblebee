const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    if(interaction.guild.name !== "CLIMAX") return;
    // Slash Command Handling
  const command = client.slashCommands.get(interaction.commandName);
  const args = [];

        for (let option of interaction.options.data) {
            if (option.type === 1) {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
  interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    if (interaction.isCommand()) {
        if (!command)
            return interaction.reply({ content: "An error has occured", ephemeral: true});
        command.run({client, interaction, args});
    }

    // Context Menu Handling
    if (interaction.isContextMenuCommand()) {
        if (command) command.run({client, interaction});
    }
  const logsChannel = interaction.guild.channels.cache.find(ch => ch.name === "bot-logs")
  logsChannel.send(`<@${interaction.user.id}> - **COMMAND USAGE**:\n> command: \`${client.config.prefix}${command.name}\`\n> args: \`\`\`${args.join(" ") || "[NO ARGS]"}\`\`\`\n> channel: <#${interaction.channel.id}>`)
});
