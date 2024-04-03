import axios from 'axios';
import { FormValues } from '../utils/FormUtils';

export const handleSubmit = async (values: FormValues): Promise<void> => {
  try {
    await axios.post("http://localhost:8000/send-email", values);
    alert("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Failed to send email");
  }
};
