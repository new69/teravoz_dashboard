import React from 'react';
import './PhoneCall.css';


const PhoneCall = (props) => {
  return (
    <div data-testid={props["data-testid"]} className="phone-call">
      <h4>
        {`Call ID: ${props.callId}`}
      </h4>
      <h4>
        {`Status: ${props.type}`}
      </h4>
      <h4>
        {`Their number: ${props.theirNumber}`}
      </h4>
      <h4>
        {`Our Number: ${props.ourNumber}`}
      </h4>
    </div>
  )
};

export default PhoneCall;
