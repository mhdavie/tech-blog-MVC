const {Sequelize, Model, DataTypes} = require('sequalize');
const sequalize = require ('../config/connections');

class Comment extends Model {}
    Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequalize
    }
    
    );

    module.exports = Comment;