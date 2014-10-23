Meteor.users.remove({});
['fPfmNL8WHH7RW2qa2', '59gH2uBGw9WaZx5tW', 'PnAxwQuMPnFaXoFD9', 'Wk5yHj75rWr2B2FRe', 'QBFrHeX5Qw9MJ2vpu', 'aQmTzcZ7W2t2Hn4eM', 'TSs9j9QPggsjzPGcX', 'xDfoANsqGPYRCzJHg', 'ftu4xKJGvNZKBwb5P', 'Tcx2drQ2vmKPKLSz3'].forEach(function (userId) {
  Meteor.users.insert({
    _id: userId,
    createdAt: Date.now(),
    emails: [{address: userId+'@meteorhacks.com', verified: false}],
    services: {password: {bcrypt: ''}}
  });
});
