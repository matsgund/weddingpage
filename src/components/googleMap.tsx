import React from 'react';

const GoogleMapRoute : React.FC = () => {
    return (
        <div className="w-full h-60 sm:h-96">
         <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d126369.39886152736!2d4.993775061807374!3d60.337491874402666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x463cf9b86fe97875%3A0xfe444d1e972eb51a!2sFanavegen%202%2C%205222%20Nesttun!3m2!1d60.3127084!2d5.3554166!4m5!1s0x463ce6313e33d745%3A0xd0c7b86f03eeb9c3!2zTG9rw7h5dsOlZ2VuIDY4LCBGamVsbA!3m2!1d60.319865199999995!2d4.9656312!5e0!3m2!1sen!2sno!4v1696783298185!5m2!1sen!2sno" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.25rem' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen">
         </iframe>
        </div>
    );
};

export default GoogleMapRoute;
