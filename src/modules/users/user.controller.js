
import { createUser, loginUser } from "./user.service.js";

export const signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const user = await createUser({
            userName,
            email,
            password
        });

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user.id,
                userName: user.userName,
                email: user.email
            }
        });

    } catch (error) {
        const statusCode = error.message === "Email already exists" ? 409 : 500;

        return res.status(statusCode).json({
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const { user, token } = await loginUser({
            email,
            password
        });

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                userName: user.userName,
                email: user.email
            }
        });

    } catch (error) {
        const statusCode = error.message === "Invalid email or password" ? 401 : 500;

        return res.status(statusCode).json({
            message: error.message
        });
    }
};

