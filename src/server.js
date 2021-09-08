const http = require('http');

module.exports = (bot) => {
  const server = http.createServer();

  server.on('request', (req, res) => {
    const botHealthy = bot.ws.status === 0; // https://github.com/discordjs/discord.js/blob/d0bc4d7ff037035d4f315a0286b06f0a1ade29c1/src/client/Client.js#L258
    const lavalinkHealthy = bot.manager.idealNodes.length > 0;

    res.writeHead(
      (botHealthy && lavalinkHealthy) ? 200 : 500,
      {'content-type': 'application/json'}
    )
    res.write(JSON.stringify(bot));
    res.end();
  });

  server.listen(
    process.env.LISTEN_PORT || 8080,
    process.env.LISTEN_ADDRESS || '0.0.0.0'
  );
}
