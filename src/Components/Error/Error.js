import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <section className='error-message'>
      <article className='message'>
        <h2>We're having technical difficulties.</h2>
        <p><em>Please refresh or revisit at a later time.</em></p>
        <h3>Thank you.</h3>
      </article>
    </section>
  )
}

export default Error;
