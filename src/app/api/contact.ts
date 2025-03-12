import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Access environment variables
    const gmailEmail = process.env.GMAIL_EMAIL;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    // Validation: Check if environment variables are set
    if (!gmailEmail || !gmailAppPassword || !receiverEmail) {
      console.error('Missing environment variables!');
      res.setHeader('Content-Type', 'application/json');
      return res.status(500).json({ message: 'Internal server error' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailEmail, // Use environment variable
        pass: gmailAppPassword, // Use environment variable
      },
    });

    const mailOptions = {
      from: gmailEmail, // Use environment variable
      to: receiverEmail, // Use environment variable (THE IMPORTANT CHANGE!)
      subject: `New Message from Tech Inclusion Website: ${name} `, // CHANGE THE SUBJECT
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).json({ message: 'Method not allowed' });
  }
}
