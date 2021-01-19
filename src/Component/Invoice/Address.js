import React from 'react';
import Block from './Block';

function Address({ emitter, recipient }) {
  return (
    <div className="Address clearfix">
      <div className="Header-receipt">Diterbitkan Oleh :</div>
      <Block recipient {...recipient} />
      <Block {...emitter} />
    </div>
  );
}

export default Address;

