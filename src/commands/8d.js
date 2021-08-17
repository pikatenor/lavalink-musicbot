const util = require("../util");
module.exports = {
    name: "8d",
    aliases: ["rotation"],
    exec: async (ctx) => {
        const { music } = ctx;
        if (!music.player?.track) return ctx.respond({
            embeds: [util.embed().setDescription("❌ | Currently not playing anything.")]
        });
        if (!ctx.member.voice.channel)
            return ctx.respond({
                embeds: [util.embed().setDescription("❌ | You must be on a voice channel.")]
            });
        if (ctx.guild.me.voice.channel && !ctx.guild.me.voice.channel.equals(ctx.member.voice.channel))
            return ctx.respond({
                embeds: [util.embed().setDescription(`❌ | You must be on ${ctx.guild.me.voice.channel} to use this command.`)]
            });
      
        music.set8D(!music.filters["8d"]);  
        ctx.respond({
            embeds: [util.embed().setDescription(`✅ | ${music.filters["8d"] ? "Enabled" : "Disabled"} **8D**`)]
        });
    }
};
