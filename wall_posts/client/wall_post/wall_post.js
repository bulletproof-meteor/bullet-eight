Template.wall_post.helpers({
  styles: function () {
    var styles = [];
    if(this.role === 'admin')
      styles.push('inverted');
    return styles.join(' ');
  }
});
