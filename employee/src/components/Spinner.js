import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import '../App.css';

function Spinner() {
  return (
    <div className='spinner'>
      <ClipLoader color="black" size={50}/>
    </div>
  );
}

export default Spinner;