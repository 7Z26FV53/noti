"use client";

import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

const NEXT_PUBLIC_PUSHER_KEY = "ddda51905ae92f919161";
const NEXT_PUBLIC_PUSHER_CLUSTER = "ap4";

const pusher = new Pusher(NEXT_PUBLIC_PUSHER_KEY, {
  cluster: NEXT_PUBLIC_PUSHER_CLUSTER,
});

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const channel = pusher.subscribe("noti");

    channel.bind("YOUR_EVENT_NAME", (data) => {
      setNotifications([...notifications, data]);
    });

    return () => {
      pusher.unsubscribe("noti");
    };
  }, [notifications]);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
