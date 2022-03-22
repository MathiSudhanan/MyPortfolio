import React, { useState } from "react";

interface Props {}

const Contact = (props: Props) => {
  const [name,setName]=useState('');
  const onSubmit = () => {
    
    // r.target.reset();
  };
  const handleOnChange=(e:any)=>{
    setName(e.target.value)
  }

  return (
    <section id='contact' className='section-5 center'>
      <div className="section-5-container center">
      <div className='section-5-heading'>
        <h1>Contact Me</h1>
      </div>
      <form onSubmit={onSubmit}>
      <div className='section-5-content'>
      
        <div className='section-5-row'>
          <div className='section-5-col'>
            <input className="form-field" type='text' placeholder='Please enter your Name' onChange={(e)=>handleOnChange(e)}/>
            <label className="form-label">Name</label>
          </div>
          <div className='section-5-col'>
            <input className="form-field" type='text' placeholder='Please enter your Email' />
            <label className="form-label">Email</label>
            
          </div>
          <div className='section-5-col'>
            <input className="form-field" type='text' placeholder='Please enter your Subject' />
            <label className="form-label">Subject</label>
            
          </div>
        </div>
        <div className='section-5-row'>
          <div className='section-5-col'>

            <textarea className="form-field" placeholder='Please enter your Message' />
            <label className="form-label">Message</label>

            
          </div>
        </div>
        
      </div>
      <div className="section-5-button">
          <button type="submit">Contact Me</button>
        </div>
      </form>
      </div>
      <div className="footer">
        
      </div>
    </section>
  );
};

export default Contact;
