const Post = require('./Post');
const User = require('./User');
const Follow = require('./Follow');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
Post.belongsTo(User, {
    foreignKey: 'user_id'
    });

Comment.belongsTo(User, {
    foreignKey: 'user_id'
    });
      
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
    });

User.hasMany(Comment, {
    foreignKey: 'user_id'
    });
      
Post.hasMany(Comment, {
    foreignKey: 'post_id'
    });

User.hasMany(Follow, {
    foreignKey: 'follow_id'
});

User.belongsTo(Follow, {
    foreignKey: 'user_id'
});

