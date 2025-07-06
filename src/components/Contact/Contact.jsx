

import React from 'react';
import   './contact.css';

import location from "./../../icon/location.png"
import call from "./../../icon/call.png"
import message from "./../../icon/message.png"


export default function Contact() {

  const card = [
    {
      id : 1 ,
      icon : location ,
      title : "102 Street 2714 Donovan"
    },
    {
      id : 2 ,
      icon : call ,
      title : "+02 1234 567 88"
    },
    {
      id : 3 ,
      icon : message ,
      title : "info@example.com"
    }
  ]

    return(

        <div className='contact  '>

          <section className="sec-header text-center box-container ">
            <h1 className='fw-normal'>Get In Touch</h1>
            <p className='m-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
          </section>
          
          <section className='cards text-center box-container pt-4 '>
            <div className="row g-4">
                  {card?.map((item) => (
                    <>
                      <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="inner rounded-2">
                          <div className="img-container  ">
                            <img src= {item.icon} alt=""  className=''/>
                          </div>
                          <span className='fw-medium d-block'>{item.title}</span>
                          <p>Lorem ipsum dolar site amet discont</p>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </section>

          <section className='information '>
              <div className="box-container ">
                <div className="inner rounded-2 contact-border ">
                  <div className="info-header text-center mb-2 pb-5 contact-border border-top-0 border-start-0 border-end-0">
                    <h1 className='fw-normal'>Send Us</h1>
                    <p className='m-auto pb-2 '>Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</p>
                  </div> 

                  <form className="row g-3 pt-5  ">
                    <div className="col-md-6" >
                      <label htmlFor="inputName4" className="form-label">Name</label>
                      <input type="text" className="shadow-none form-control px-3  border-0  " id="inputName4" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">Email *</label>
                      <input type="email" className="shadow-none form-control px-3 border-0 " id="inputEmail4" required/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputPhone" className="form-label" >Phone number</label>
                      <input type="tell" className="shadow-none form-control px-3 border-0 " id="inputPhone"  />
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourMessage" class="form-label">Your message</label>
                      <textarea class="form-control shadow-none  px-3 border-0  " id="yourMessage " rows={4} ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-sm fw-medium  border-0">Send Message</button>
                    </div>
                  </form>

                </div>
              </div>    

          </section>


          
        </div>
    )
};

 