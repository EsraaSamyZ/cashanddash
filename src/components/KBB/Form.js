import React, { useState } from "react"
import ArrowIcon from "../../images/svg/GetOfferBtn.inline.svg"
import LockIcon from "../../images/svg/Lock.inline.svg"

const Form = () => {
  const [activeSection, setActiveSection] = useState("vin")
  const [formData, setFormData] = useState({
    licensePlate: "",
    state: "",
    vin: "",
    make: "",
    model: "",
    style: "",
    mileage: "",
    year: "",
  })
  const [errors, setErrors] = useState({})

  // Dummy data for the select options
  const yearOptions = ["2021", "2022", "2023"]
  const makeOptions = ["Toyota", "Honda", "Ford"]
  const modelOptions = ["Camry", "Civic", "F-150"]
  const styleOptions = ["Sedan", "SUV", "Truck"]

  const validate = () => {
    let tempErrors = {}
    if (activeSection === "licensePlate") {
      if (!formData.licensePlate)
        tempErrors.licensePlate = "License plate is required"
      if (!formData.state) tempErrors.state = "State is required"
    } else if (activeSection === "vin") {
      if (!formData.vin) tempErrors.vin = "VIN is required"
      else if (formData.vin.length !== 17)
        tempErrors.vin = "VIN must be 17 characters"
    } else if (activeSection === "makeModel") {
      if (!formData.make) tempErrors.make = "Make is required"
      if (!formData.model) tempErrors.model = "Model is required"
    }
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      console.log("Form Data:", formData)
      // Submit form data
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const isActive = section =>
    activeSection === section
      ? "border-4 md:border-b-4 md:border-t-0 md:border-l-0 md:border-r-0 border-royal-blue font-bold text-royal-blue"
      : ""

  return (
    <div
      className="bg-white rounded-xl overflow-hidden border shadow-md"
      style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-10 text-center space-y-6">
        <h2 className="text-3xl font-bold text-black">
          Tell Us About Your Car
        </h2>
        <p className="text-sm  text-gray-800">
          Your License Plate or VIN helps us fill in key details about your
          vehicle and ensures a more accurate offer.
        </p>

        <div className="text-lg flex flex-col w-fit mx-auto space-y-3 md:space-y-0 md:w-full md:flex-row md:justify-between md:text-center">
          <button
            className={isActive("licensePlate")}
            onClick={() => setActiveSection("licensePlate")}
          >
            License Plate
          </button>
          <button
            className={isActive("vin")}
            onClick={() => setActiveSection("vin")}
          >
            VIN
          </button>
          {/* <button
            className={isActive("makeModel")}
            onClick={() => setActiveSection("makeModel")}
          >
            Make/Model
          </button> */}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {activeSection === "licensePlate" && (
              <>
                <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-1">
                  <input
                    className="w-full text-md border border-dark-gray px-6 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                    type="text"
                    name="licensePlate"
                    placeholder="License Plate"
                    value={formData.licensePlate}
                    onChange={handleChange}
                  />
                  <div className="relative">
                    <select
                      className="w-full md:w-auto h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>

                      <option value="AK">AK</option>
                      <option value="AL">AL</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="ND">ND</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VA">VA</option>
                      <option value="VT">VT</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                    <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                      <span className="text-xs text-gray-500">State</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-fit text-lg text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg p-3 bg-royal-blue text-center inline-flex items-center justify-center"
                  >
                    <span className="mr-1">Go</span>
                    <ArrowIcon />
                  </button>
                </div>
                <div className="text-sm text-deep-crimson text-left">
                  {errors.licensePlate && <p>{errors.licensePlate}</p>}
                  {errors.state && <p>{errors.state}</p>}
                </div>
                <p className="text-sm text-gray-800 mt-3">
                  We only need your license plate to look up your car. It will
                  not be stored.
                </p>
              </>
            )}

            {activeSection === "vin" && (
              <>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-1">
                  <input
                    className="w-full text-md border border-dark-gray px-6 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                    type="text"
                    name="vin"
                    placeholder="Enter the 17-digit VIN"
                    value={formData.vin}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="w-full md:w-fit text-lg text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg p-3 bg-royal-blue text-center inline-flex items-center justify-center"
                  >
                    <span className="mr-1">Go</span>
                    <ArrowIcon />
                  </button>
                </div>
                {errors.vin && (
                  <p className="text-sm text-deep-crimson text-left">
                    {errors.vin}
                  </p>
                )}
                <p className="text-sm text-royal-blue">
                  <a href="#">Where is my VIN?</a>
                </p>
              </>
            )}

            {/* {activeSection === "makeModel" && (
              <>
                <div className="flex space-x-1">
                  <div className="w-1/2 relative">
                    <select
                      className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                      {yearOptions.map(year => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                      <span className="text-xs text-gray-500">Year</span>
                    </div>
                  </div>

                  <div className="w-1/2 relative">
                    <select
                      className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      disabled={!formData.year}
                    >
                      <option value="" disabled hidden>
                        Select
                      </option>
                      {makeOptions.map(make => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                      <span className="text-xs text-gray-500">Make</span>
                    </div>
                    {!formData.year && (
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <LockIcon />
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <select
                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    disabled={!formData.make}
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    {modelOptions.map(model => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                  <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                    <span className="text-xs text-gray-500">Model</span>
                  </div>
                  {!formData.make && (
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                  )}
                </div>

                <div className="relative">
                  <select
                    className="w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    disabled={!formData.model}
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    {styleOptions.map(style => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                  <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-white px-1">
                    <span className="text-xs text-gray-500">Style</span>
                  </div>
                  {!formData.model && (
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                  )}
                </div>

                <div className="relative">
                  <input
                    className={`w-full h-full text-md border border-dark-gray px-3 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none`}
                    type="text"
                    name="mileage"
                    placeholder="Enter Mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    disabled={!formData.style}
                  />

                  {!formData.style && (
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-lg text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-lg p-3 bg-royal-blue text-center inline-flex items-center justify-center"
                >
                  <span className="mr-2">Go</span>
                  <ArrowIcon />
                </button>
              </>
            )} */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
