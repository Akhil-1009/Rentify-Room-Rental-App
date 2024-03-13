import React, { useState } from 'react';

const RadioButtonsLaundry = ({ ad, setAd }) => {
  // console.log(ad.laundry);

  const [selectedOption, setSelectedOption] = useState(ad.laundry);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setAd({ ...ad, laundry: event.target.value })
  };

  return (
    <div className="container mt-4" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '100%', marginRight: '2px', marginLeft: '2px' }}>
      <span >Do you have a laundry facility?</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ cursor: 'pointer', fontSize: '16px' }}>
          <input
            type="radio"
            value="yes"
            checked={selectedOption === 'yes'}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label style={{ cursor: 'pointer', fontSize: '16px' }}>
          <input
            type="radio"
            value="no"
            checked={selectedOption === 'no'}
            onChange={handleOptionChange}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default RadioButtonsLaundry;
