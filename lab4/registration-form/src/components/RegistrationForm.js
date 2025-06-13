import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import './RegistrationForm.css';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, 'Phone must be 10 to 15 digits')
    .required('Phone is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegistrationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values, { resetForm }) => {
    console.log('Form submitted with data:', values);
    alert('Registration successful!\n' + JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <Container maxWidth="sm" className="container">
      <div className="form-wrapper">
        <Typography variant="h4" gutterBottom>
          Registration Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-field">
              <Field
                as={TextField}
                name="fullName"
                label="Full Name"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <Field
                as={TextField}
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <Field
                as={TextField}
                name="phone"
                label="Phone"
                type="text"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <Field
                as={TextField}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Sign Up
            </Button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default RegistrationForm;