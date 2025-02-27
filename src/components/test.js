import axios from "axios";
import React from "react";

function test(props) {
  const sendEmail = async () => {
    const emailData = {
      service_id: "ercvWbE25PC0z2Rcm",
      user_id: "template_8nk1a8d",
      template_params: {
        from_name: "Test",
        from_email: "nischith25gowda@example.com",
        message: "Hello, this is a test email from Postman!",
      },
    };
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Email Sent Successfully!", response.data);
    } catch (error) {
      console.error("❌ Error sending email:", error);
    }
  };

  // Call the function to send the email
  sendEmail();
}

export default test;
