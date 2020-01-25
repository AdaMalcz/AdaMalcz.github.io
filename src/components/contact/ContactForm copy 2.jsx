import React, { Component } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class ContactForm extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <Formik>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: ''
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
                onSubmit={() => {}}
                render={({errors, touched}) => (
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
                      <button type="reset" className="btn btn-secondary">Send</button>
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
