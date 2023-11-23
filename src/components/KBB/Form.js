// import React from 'react'

// const Form = () => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md" style={{boxShadow: '0px 0px 50px 0px rgba(0, 0, 0, 0.25)'}}>

//       <div className="p-10 text-center space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-800">Tell Us About Your Car</h2>
//         <p className="mt-2 text-gray-600">Your License Plate or VIN helps us fill in key details about your vehicle and ensures a more accurate offer.</p>
//       {/* 3 links simillar to a nav (license plate, VIN, Make/model)  when click on VIN a input + go btn appears, when click on license plate a input for the plate number and a dropdown to choose the state and go btn, when click on made/model a form will appear with fields*/}
//       </div>

//     </div>
//   )
// }

// export default Form

import React, { useState } from 'react';

const Form = () => {
  const [activeSection, setActiveSection] = useState('vin');
  const [formData, setFormData] = useState({
    licensePlate: '',
    state: '',
    vin: '',
    make: '',
    model: '',
    style: '',
    milage: '',
    year: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (activeSection === 'licensePlate') {
      if (!formData.licensePlate) tempErrors.licensePlate = 'License plate is required';
      if (!formData.state) tempErrors.state = 'State is required';
    } else if (activeSection === 'vin') {
      if (!formData.vin) tempErrors.vin = 'VIN is required';
      else if (formData.vin.length !== 17) tempErrors.vin = 'VIN must be 17 characters';
    } else if (activeSection === 'makeModel') {
      if (!formData.make) tempErrors.make = 'Make is required';
      if (!formData.model) tempErrors.model = 'Model is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      // Submit form data
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="p-10 text-center space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Tell Us About Your Car</h2>
        <p className="mt-2 text-gray-600">Your License Plate or VIN helps us fill in key details about your vehicle and ensures a more accurate offer.</p>

        <div className='flex justify-between text-center'>
          <button onClick={() => setActiveSection('licensePlate')}>License Plate</button>
          <button onClick={() => setActiveSection('vin')}>VIN</button>
          <button onClick={() => setActiveSection('makeModel')}>Make/Model</button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeSection === 'licensePlate' && (
            <>
              <input type="text" name="licensePlate" placeholder="License Plate" value={formData.licensePlate} onChange={handleChange} />
              {errors.licensePlate && <p>{errors.licensePlate}</p>}
              <select name="state" value={formData.state} onChange={handleChange}>
                <option value="">Select State</option>
                {/* Populate with state options */}
              </select>
              <p>We only need your license plate to look up your car. It will not be stored</p>
              {errors.state && <p>{errors.state}</p>}
            </>
          )}
          {activeSection === 'vin' && (
            <>
              <input type="text" name="vin" placeholder="VIN" value={formData.vin} onChange={handleChange} />
              {errors.vin && <p>{errors.vin}</p>}
            </>
          )}
          {activeSection === 'makeModel' && (
            <>
              <input type="text" name="make" placeholder="Make" value={formData.make} onChange={handleChange} />
              {errors.make && <p>{errors.make}</p>}
              <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} />
              {errors.model && <p>{errors.model}</p>}
            </>
          )}
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
