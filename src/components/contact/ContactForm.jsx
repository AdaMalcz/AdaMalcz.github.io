import React, { Component } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

export default class ContactForm extends Component {
  
  sendEmail = (fields, form )=> {
    const templateParams = {
      from_name: fields.name,
      message_html: fields.message,
      contact_email: fields.email,
    };

    emailjs.send('gmail', 'template_hYnDKI03', templateParams, 'user_8a0YXl71zcpwdzokylz4a')
      .then((result) => {
          document.getElementById('form_msg').innerHTML = `<span style='color: green'><b>${result.text}</b></span>`;
          form.setFieldValue('message', "Thank you! Your massage is sent.")
      }, (error) => {
          document.getElementById('form_msg').innerHTML = error.text;
          document.getElementById('form_msg').innerHTML = `<span style='color: red'><b>${error.text}</b></span>`;
      });
  }
  
  render() {
    return (
      <MDBRow>
        <MDBCol className="mb-4">
          <MDBCard>
            <Formik>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                  props: this.props
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string()
                    .required('Please sign yourself before sending a message.'),
                  email: Yup.string()
                    .email('Invalid email')
                    .required('Please leave me your email, so I can write you back.'),
                  message: Yup.string()
                    .min(10, 'Message to short.')
                    .required('Message is empty.')
                })}
                onSubmit={this.sendEmail}
                render={({errors, touched, resetForm}) => (
                  <Form className="pl-4 pr-4 pt-4">
                    <h4 className="text-center">Send me an email</h4>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field
                        name="name"
                        type='text'
                        className={
                          'form-control' + (errors.name && touched.name ? ' is-invalid' : '')
                      }
                      />
                      <ErrorMessage name="name" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Email</label>
                      <Field
                        name="email"
                        type='text'
                        className={
                          'form-control' + (errors.email && touched.email ? ' is-invalid' : '')
                      }
                      />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Message</label>
                      <Field
                        name="message"
                        type='text'
                        as="textarea"
                        className={
                          'form-control' + (errors.message && touched.message ? ' is-invalid' : '')
                        }
                      />
                      <ErrorMessage name="message" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-secondary">Send</button><span id="form_msg"></span>
                    </div>
                  </Form>
                )}
              />
            </Formik>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
