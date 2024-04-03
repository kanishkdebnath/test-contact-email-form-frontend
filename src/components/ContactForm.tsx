import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { FormValues, validationSchema } from "../utils/FormUtils";
import { handleSubmit } from "../handlers/FormHandler";

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        margin="normal"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        margin="normal"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
