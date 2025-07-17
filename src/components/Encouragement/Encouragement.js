'use client';

import '@/styles/components/Encouragement.css'

const Encouragement = () => {

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form-home')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='encouragement'>
        <p className='encouragement-p'>Хочете зробити крок до нової мови?</p>
        <button className='encouragement-button' onClick={scrollToContactForm}>Напишіть нам! </button>
    </div>
  )
}

export default Encouragement