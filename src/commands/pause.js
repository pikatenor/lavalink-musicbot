const util = require("../util");

module.exports = {
    name: "pause",
    exec: (ctx) => {
        const { music } = ctx;
        if (!music.player?.track) return ctx.respond({ embeds: [util.embed().setDescription("❌ | Currently not playing anything.")] });
        if (!ctx.member.voice.channel)
            return ctx.respond({
                embeds: [util.embed().setDescription("❌ | You must be on a voice channel.")]
            });
        if (ctx.guild.me.voice.channel && !ctx.guild.me.voice.channel.equals(ctx.member.voice.channel))
            return ctx.respond({
                embeds: [util.embed().setDescription(`❌ | You must be on ${ctx.guild.me.voice.channel} to use this command.`)]
            });

        try {
            music.pause();
            ctx.respond({
                embeds: [util.embed().setDescription("⏸️ | Paused")]
            });
        } catch (e) {
            ctx.respond(`An error occured: ${e.message}.`);
        }
    }
};
