module.exports = class Balance extends client.commandManager.Command {
    constructor() {
        super({
            name: module.filename.split('/').pop().slice(0, -3),
            category: module.filename.split('/').slice(-2)[0],
            aliases: ['bal']
        })
    }

    async run({ message, args, user }) {
        if (args[0]) user = database.get(args.join(' '), 'user');
        if (!user || user.kind !== 'user') return message.send('No user was found with what was inputted.');

        let balance = user.balance;
        return message.send({
            message, title: `${user.tag}'s Balance`, description:
                `${message.emote('gold')} ${balance.gold}
        ${message.emote('rose')} ${balance.rose}
        ${message.emote('gem')} ${balance.gem}
        ${message.emote('token')} ${balance.token}`
        });
    }
}