import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Constants
import {CONFIG} from '../../_constants';

// Style
import './App.css';

// Components
import PhoneCall from '../../_components/PhoneCall';


const App = () => {
  const [phoneCalls, setPhoneCalls] = useState([]);

  const getCalls = () => {
    axios.get(`${CONFIG.WEBHOOK_URL}webhook`)
      .then(res => {
        const list = res.data.data.map((item, key) => {
          return (
            <PhoneCall
              key={key}
              callId={item.call_id}
              type={item.type}
              theirNumber={item.their_number}
              ourNumber={item.our_number}
            />
          )
        });

        setPhoneCalls(list);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(getCalls, []);

  return (
    <div className="app">
      {phoneCalls}
    </div>
  );
}

export default App;
