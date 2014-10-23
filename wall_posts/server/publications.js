Meteor.publish('wall_posts', function (count) {
  return Posts.find({}, {sort: {time: -1}, limit: count});
});

Meteor.publish('wall_post_count', function (count) {
  return Posts.find();
});
