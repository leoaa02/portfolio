import express from "express";
import nodemailer from "nodemailer";
import Message from "../models/messageModel.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Configurar transporte de email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    },
});

// Ruta principal del formulario
router.post("/", async (req, res) => {
    try {
    const { name, email, message } = req.body;

    // Guardar en la base de datos
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Enviar el correo
    await transporter.sendMail({
        from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `Nuevo mensaje de ${name}`,
        html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        `,
    });

    res.status(201).json({ success: true, message: "Mensaje enviado correctamente ✅" });
    } catch (error) {
    console.error("Error al enviar mensaje:", error);
    res.status(500).json({ success: false, message: "Error al enviar el mensaje ❌" });
    }
});

export default router;
