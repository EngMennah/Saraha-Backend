import { sendMessage, getMyMessages } from "./message.service.js";

export const createMessage = async (req, res) => {
    try {
        const { content, receiverId } = req.body;

        if (!content || !receiverId) {
            return res.status(400).json({
                message: "Content and receiverId are required"
            });
        }

        const message = await sendMessage({
            content,
            receiverId
        });

        return res.status(201).json({
            message: "Message sent successfully",
            data: message
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await getMyMessages(req.user.id);

        return res.status(200).json({
            message: "Messages retrieved successfully",
            data: messages
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

