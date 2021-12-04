const User = require('./User');
const Post = require('./Post');
const Post = require('./Comment');

//belongsTo Post and User 
//hasMany Post and Comments
//belongsTo Comments and User



User.hasMany(Post, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})


Post.belongsTo(User, {
    foreignkey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})


module.exports = {
    User,
    Post,
    Comment
};