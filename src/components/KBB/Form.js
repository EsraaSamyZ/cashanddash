import React, { useState } from "react"
import ArrowIcon from "../../images/svg/GetOfferBtn.inline.svg"
import VinOverlay from "./VinOverlay";
import { checkVIN, checkPlate } from "../Shared/Api";

const Form = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("vin");
  const [formData, setFormData] = useState({
    licensePlate: "",
    state: "",
    vin: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const validateForm = () => {
    const newErrors = {};
    if (activeSection === "vin" && !formData.vin) {
      newErrors.vin = "VIN is required";
    } else if (activeSection === "licensePlate") {
      if (!formData.licensePlate) {
        newErrors.licensePlate = "License Plate is required";
      }
      if (!formData.state) {
        newErrors.state = "State selection is required";
      }
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        let result;
        if (activeSection === "vin") {
          result = await checkVIN(formData.vin);
        } else {
          result = await checkPlate(formData.licensePlate, formData.state);
        }

        if (result && result.results) {
          window.location.href = result.results;
        } else {
          setErrors({ apiError: "No vehicle information found" });
        }
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Error connecting to KBB";
        setErrors({ apiError: errorMessage });
      } finally {
        setIsLoading(false);
      }
    }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isActive = (section) =>
    activeSection === section
      ? "px-0.5 border-4 md:border-b-4 md:border-t-0 md:border-l-0 md:border-r-0 border-royal-blue font-bold text-royal-blue"
      : "";

  return (
    <div
      className="mt-8 md:mr-16 md:mt-0 bg-white rounded-xl overflow-hidden border shadow-md"
      style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-10 text-center space-y-6">
        <h2 className="text-3xl font-bold text-black">
          Tell Us About Your Car
        </h2>
        <p className="text-sm text-gray-800">
          Your License Plate or VIN helps us fill in key details about your
          vehicle and ensures a more accurate offer.
        </p>

        <div className="text-xl flex flex-col w-fit mx-auto space-y-3 md:space-y-0 md:w-full md:flex-row md:justify-evenly md:text-center">
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
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {activeSection === "licensePlate" && (
              <>
                <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-1">
                  <input
                    // required
                    className="w-full text-md border border-dark-gray px-6 py-3 rounded-lg focus:border-royal-blue focus:border-2 focus:outline-none"
                    type="text"
                    name="licensePlate"
                    placeholder="License Plate"
                    value={formData.licensePlate}
                    onChange={handleChange}
                  />
                  <div className="relative">
                    <select
                      // required
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
                {errors.licensePlate && (<p className="text-sm text-deep-crimson text-left">{errors.licensePlate}</p>)}
                {errors.state && (<p className="text-sm text-deep-crimson text-left">{errors.state}</p>)}
                {errors.apiError && (<p className="text-sm text-deep-crimson text-left">{errors.apiError}</p>)}

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
                    required
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
                {errors.vin && (<p className="text-sm text-deep-crimson text-left">{errors.vin}</p>)}
                {errors.apiError && (<p className="text-sm text-deep-crimson text-left">{errors.apiError}</p>)}
                <div>
                  <p className="text-sm text-royal-blue">
                    <button className="cursor-pointer p-2" onClick={toggleOverlay}>
                      Where is my VIN?
                    </button>
                  </p>
                  {isOverlayVisible && <VinOverlay setIsOverlayVisible={setIsOverlayVisible} />}
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
