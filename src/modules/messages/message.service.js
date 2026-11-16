
import Message from "../../DB/models/message.model.js";

export const sendMessage = async ({ content, receiverId }) => {
    const message = await Message.create({
        content,
        receiverId
    });

    return message;
};

export const getMyMessages = async (receiverId) => {
    const messages = await Message.findAll({
        where: { receiverId },
        order: [["createdAt", "DESC"]]
    });

    return messages;
};
