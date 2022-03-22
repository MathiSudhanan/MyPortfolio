// import React, { useState } from "react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"

import { useForm } from "react-hook-form";

import { Link } from 'react-scroll'

interface Props {}

const Contact = (props: Props) => {
  const [successMessage, setSuccessMessage] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceId = "SendMailTest1";
  const templateId = "template_Id";
  const userId = "GYCHWT43Xuez4DdLR";
  // const { ref, ...rest } = register("firstName");

  const onSubmit = (data:any, r:any) => {
   
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,        
        email: data.email,
        subject: data.subject,
        message: data.message
      },
      userId
    );
    r.target.reset();
  };

  const sendEmail = (serviceId:string, templateId:string, mailData:any, userId:string) => {
    // e.preventDefault();

    emailjs
      .send(serviceId, templateId, mailData, userId)
      .then(() => {
        setSuccessMessage(
          "Mail sent successfully! I'will contact you as soon as possible."
        );
      })
      .catch((error) => {
        console.error(`Something went wrong ${error}`);
        // setErrorMessage(error);
      });
  };

  return (
    <section id='contact' className='section-5 center'>
      <div className="section-5-container center">
      <div className='section-5-heading'>
        <h1>Contact Me</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='section-5-content'>
      
        <div className='section-5-row'>
          <div className='section-5-col'>
            <input className="form-field" type='text' placeholder='Please enter your Name' 
            // name="name" 
            {...register("name", {
              required: "Please enter your name",
              maxLength: {
                value: 20,
                message:
                  "Please enter a name with fewer than 20 charaters",
              },
            })}
            />
            <label className="form-label">Name</label>

          </div>
          <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
          <div className='section-5-col'>
            <input className="form-field" type='text' placeholder='Please enter your Email' 
            {...register("email", {
              required: "Please provide your email id",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email id",
              },
            })}/>
            <label className="form-label">Email</label>
            
          </div>
          <span className='error-message'>
                {errors.email && errors.email.message}
              </span>


          <div className='section-5-col'>
            <input className="form-field" type='text' placeholder='Please enter your Subject' 
            {...register("subject", {
              required: "OOPS, you forget to add the subject",
            })}
            />
            <label className="form-label">Subject</label>
            
          </div>
          <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
        </div>
        <div className='section-5-row'>
          <div className='section-5-col'>

            <textarea className="form-field" placeholder='Please enter your Message' 
            {...register("message", {
                    required: "Please describe shortly your project needs...",
                  })}/>
            <label className="form-label">Message</label>            
          </div>
          {errors && (
                <span className='error-message'>
                  {errors.message && errors.message.message}
                </span>
              )}
        </div>
        
      </div>
      <div className="section-5-button">
          <button type="submit">Contact Me</button>
        </div>
      </form>
      </div>
      <div className="footer">
      
      
      {/* <i className="fa-solid fa-user"></i> */}
      


      <Link
                offset={-50}
                smooth={true}
                to='home'
                className='footer-link center'
                href='#'
                spy={true}
                activeClass='active'
              >
                <i className="fa-solid fa-house-chimney"></i>
                <span>Home</span>
              </Link>

              <Link
                offset={-50}
                smooth={true}
                to='about'
                className='footer-link center'
                href='#'
                spy={true}
                activeClass='active'
              >
                <i className="fa-regular fa-user"></i>
                <span>About Me</span>

              </Link>
              <Link
                offset={-50}
                smooth={true}
                to='experience'
                className='footer-link center'
                href='#'
                spy={true}
                activeClass='active'
              >
                <i className="fa-solid fa-laptop"></i>
                <span>Experience</span>
              
              </Link>
              
              <Link
                offset={-50}
                smooth={true}
                to='portfolio'
                className='footer-link center'
                href='#'
                spy={true}
                activeClass='active'
              >
                <i className="fa-solid fa-id-card"></i>
                <span>Portfolio</span>

              </Link>
              
      </div>
    </section>
  );
};

export default Contact;
