import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body;

    // Create a transporter with your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'zendorasalon.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@zendorasalon.com',
        pass: 'zendora123',
      },
    });

    // Configure the email options
    const mailOptions = {
      from: 'info@zendorasalon.com',
      to: 'INFO@ZENDORASALON.COM',
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
};

export default handler;
