import React from 'react';

function About() {
  return (
    <section className="my-5 modalContainer">
      <h1 id="about" className='modalTitle'>Who am I?</h1>
      <img src={require('../../assets/images/personal.jpg')} className="card profileImg" style={{ width: "50%" }} alt="Profile" />
      <div className="my-2">
        <p>
        I currently have five years of experience in Retail and customer satisfaction. I am passionate about coding 
        and love seeing all the ways coding can bring websites, and the user experience to life. I continue to enjoy 
        learning how coding is evolving and the ways other coders' accomplishments make all of our lives easier, as 
        well as looking for ways to be the one who changes how things are done.

        </p>
      </div>
    </section>
  );
}

export default About;