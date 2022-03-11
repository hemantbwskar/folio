import React from 'react';
import './form.css'
import { send } from 'emailjs-com';
import { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Form(){

    const [toSend, setToSend] = useState({
        from_name: '',
        contact: '',
        message: '',
        reply_to: '',
      });

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      const handleReset=()=>{
        setToSend({
          from_name: '',
        contact: '',
        message: '',
        reply_to: '',
        })
      }

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_ywpjjfo',
          'template_tome',
          toSend,
          'ixgtgba1Qb3eRKMVl'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            handleReset();
            toast.success('Successfully sent',
            {position: toast.POSITION.TOP_LEFT});
            send(
              'service_ywpjjfo',
              'template_tocontacter',
              toSend,
              'ixgtgba1Qb3eRKMVl'
            )
          })
          .catch((err) => {
            console.log('FAILED...', err);
            handleReset();
            toast.error('Failed to send',
            {position: toast.POSITION.TOP_LEFT})
          });
      };

    return(
        <div>
            <form onSubmit={onSubmit} name='contactMe' className='dropdown-form'>
            <input
                    type='text'
                    name='from_name'
                    placeholder='Your Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='contact'
                    placeholder='Contact no.'
                    value={toSend.contact}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your Message'
                    value={toSend.message}
                    onChange={handleChange}
                    required
                />
                <input
                    type='email'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className='submit'>Submit</button>
            </form>
            
        </div>
    )
}

