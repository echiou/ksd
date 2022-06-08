import * as React from 'react';

// Defining the <EcButton> component
const EcButton = ({ fn, text }: props) => {
  return (
    <div className="btn btn-large btn-dark outline" onClick={fn}>
      {text}
    </div>
  );
};

export default EcButton;
