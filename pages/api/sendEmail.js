import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { applicant } = req.body;

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'zendorasalon.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@zendorasalon.com',
      pass: 'zendora123',
    },
  });

  // Create the email message
  const message = {
    from: `${applicant.email}`, // Sender's email address
    to: 'info@zendorasalon.com', // Recipient's email address
    subject: 'New Tenant Application Submitted',
    text: `A new tenant application has been submitted with the following details:\n\nName: ${applicant.name}\nEmail: ${applicant.email}\nAddress: ${applicant.address}\nTelephone: ${applicant.telephone}\n\nPlease review it promptly.`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(message);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
