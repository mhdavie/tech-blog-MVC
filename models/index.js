const User = require('./User');
const Post = require('./Post');
const Post = require('./Comment');

//belongsTo Post and User 
//hasMany Post and Comments
//belongsTo Comments and User

Post.belongsTo(User, {
    foreignkey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post,
};
