// pages/api/sendEmail.js

import nodemailer from "nodemailer";

function getMailContent(data) {
  return `
        <div style='width: 100%; background-color: #f3f9ff; padding: 5rem 0'>
          <div style='max-width: 700px; background-color: white; margin: 0 auto'>
            <div style='width: 100%; background-color: #00efbc; padding: 20px 0'></div>
            <div style='width: 100%; gap: 10px; padding: 30px 0; display: grid'>
              <p style='font-weight: 800; font-size: 1.2rem; padding: 0 30px'>
                From contact us form
              </p>
              <div style='font-size: .8rem; margin: 0 30px'>
                <p>Name: <b>${data.name}</b></p>
                <p>Email: <b>${data.email}</b></p>
                <p>Phone: <b>${data.phone}</b></p>
                <p>date: <b>${data.date}</b></p>
                <p>timeSlot: <b>${data.timeSlot}</b></p>
                <p>Service: <b>${data.Service}</b></p>
              </div>
            </div>
          </div>
        </div>
      `;
}
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Extract form data
    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "abdallaballo20@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Ignore certificate validation
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "Dr.rehabzakaria@gmail.com",
        subject: "Recervation",
        html: getMailContent(data),
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Error sending email" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
