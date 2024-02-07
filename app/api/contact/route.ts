import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    }
});

export const POST = async (request: Request) => {
    const formData = await request.formData();

    const clientName = formData.get('name') as string | null;
    const clientEmail = formData.get('email') as string  | null;
    const messageTitle = formData.get('title') as string  | null;
    const messageText = formData.get('message') as string  | null;

    const clientAdress = clientEmail ? { name: clientName ?? '', address: clientEmail} : undefined;

    try {
        const info = await transporter.sendMail({
            from: { name: 'Contact Form', address: '7arh3ad@gmail.com'}, // sender address
            replyTo: clientAdress,
            to: "7arh3ad@gmail.com", // list of receivers
            subject: `✔ Contact Form: ${messageTitle ?? 'no title'}`, // Subject line
            text: messageText ?? 'empty message', // plain text body
            html: `<h2>${messageTitle ?? 'no title'}</h2><p>${messageText ?? 'empty message'}</p>` // html body
        });
        console.log('message: ', info.messageId);
        return NextResponse.json({message: "Success"}, {status: 200}); 
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({error: "Sending e-mail failed!"}, {status: 500});
    }
}

// https://nodemailer.com/usage/