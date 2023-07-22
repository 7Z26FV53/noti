"use client";

import Pusher from 'pusher-js';
import { useEffect, useState } from "react";
import axios from "axios";

// ref: https://pusher.com/docs/channels/getting_started/javascript/
export default function Home() {

  // open a connection to channels
  let pusher = new Pusher(process.env.key, {
    cluster: process.env.cluster
  });
  
  useEffect(() => {
    // subscribe a channel
    let channel = pusher.subscribe("my-channel");
  
    // listen for events on your channel
    // 
    // Every published event has an “event name”.
    // The event you will publish will have the event name my-event.
    // For your web app to do something when it receives an event
    // called my-event, your web app must first “bind” a function
    // to this event name. Do this using the channel’s bind method:
    channel.bind('event-click', function(data) {
      alert(JSON.stringify(data));
    });
    return () => {
      pusher.unsubscribe("my-channel");
    };
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log('clicked!');
    await axios.post("http://127.0.0.1:5000/event-click", {
      message:'hello from the frontend~',
      username:'rein'
    });
  };

  return (
    <div className='flex flex-col justify-center text-center'>
      <h1 className='text-[2rem]'>Pusher Test</h1>
      <div className='text-[1.5rem]'>
        <p>
          Try publishing an event to channel <code>my-channel</code> 
          with event name <code>my-event</code>.
        </p>
        <button className='border border-white p-3' onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}
