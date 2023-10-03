import React from 'react';

const GoogleMapRoute : React.FC = () => {
    return (
        <div className="w-full h-60 sm:h-96">
         <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d126297.97281453827!2d4.984012801485742!3d60.35593390772767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x463ce6313e33d745%3A0xd0c7b86f03eeb9c3!2zTG9rw7h5dsOlZ2VuIDY4LCBGamVsbA!3m2!1d60.319865199999995!2d4.9656312!4m5!1s0x463cff3ee584d42d%3A0x16bd99f042dcfd7f!2sDen%20bl%C3%A5%20steinen%2C%20Kong%20Olav%20Vs%20plass%204%2C%205012%20Bergen!3m2!1d60.3918676!2d5.322912199999999!5e0!3m2!1sen!2sno!4v1696354607060!5m2!1sen!2sno" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen">
         </iframe>
        </div>
    );
};

export default GoogleMapRoute;
