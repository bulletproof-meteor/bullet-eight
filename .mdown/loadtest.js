var mdown = new MeteorDown(function (error, client) {
  client.subscribe('wall_post_count', function (err, res) {
    client.kill();
  });
});

mdown.run({
  concurrency: 10,
  url: 'http://localhost:3000',
  key: '912eb959-51a1-41d5-ba82-f80a5ad21f75',
  auth: {userId: ['fPfmNL8WHH7RW2qa2', '59gH2uBGw9WaZx5tW', 'PnAxwQuMPnFaXoFD9', 'Wk5yHj75rWr2B2FRe', 'QBFrHeX5Qw9MJ2vpu', 'aQmTzcZ7W2t2Hn4eM', 'TSs9j9QPggsjzPGcX', 'xDfoANsqGPYRCzJHg', 'ftu4xKJGvNZKBwb5P', 'Tcx2drQ2vmKPKLSz3']}
});
