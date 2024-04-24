import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER!,
    pass: process.env.NODEMAILER_PASSWORD!,
  },
});

const ubSubs = `You can ubsubscribe to Us at http://localhost:3000/api/ubsubcribe/user?=`;

export const sendEmail = async ({ email, content }: any) => {
  try {
    const mailOptions = {
      from: "harshil.ai@gmail.com", // sender address
      to: email, // receiver
      subject: "HiFiveEMail",
      text: `${content}\n\n${ubSubs}${email}`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
