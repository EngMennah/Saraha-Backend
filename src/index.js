import "dotenv/config";
import app from "./app.bootstrap.js";
import { connectDB } from "./DB/db.service.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Saraha server is running on port ${PORT}`);
    });
};

startServer();
