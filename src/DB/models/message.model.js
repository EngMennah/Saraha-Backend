import { DataTypes } from "sequelize";
import sequelize from "../connectionDB.js";

const Message = sequelize.define("Message", {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Message;
