import React from 'react';

function Block({ displayName, addressLine, recipient }) {
  const className = `Address-Block${recipient ? ' is-recipient' : ''}`;
  return (
    <div className={className}>
      <p className="Address-Block-name">
        {displayName}
      </p>
      <p className="Address-Block-address">
        {addressLine}
      </p>
    </div>
  );
}

export default Block;