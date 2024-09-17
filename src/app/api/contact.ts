import { NextApiRequest, NextApiResponse } from 'next';
import emailjs from '@emailjs/nodejs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const result = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_email: process.env.EMAIL_TO, // Your recipient email
        },
        // process?.env?.EMAILJS_USER_ID!
      );

      if (result.status === 200) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        console.error('Error sending email:', result.text);
        res.status(500).json({ message: 'Error sending email' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
export { handler as default};