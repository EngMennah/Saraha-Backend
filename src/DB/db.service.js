import sequelize from "./connectionDB.js";
import User from "./models/user.model.js";
import Message from "./models/message.model.js";

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");

        await sequelize.sync({ alter: true });
        console.log("Database tables synchronized successfully!");

    } catch (error) {
        console.error("Database connection failed:", error);
    }
};