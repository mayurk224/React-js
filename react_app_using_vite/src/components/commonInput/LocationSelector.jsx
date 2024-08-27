import React, { useState } from "react";

const data = {
  countries: [
    {
      name: "USA",
      states: [
        {
          name: "California",
          cities: [
            "Los Angeles",
            "San Francisco",
            "San Diego",
            "Sacramento",
            "San Jose",
          ],
        },
        {
          name: "Texas",
          cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
        },
        // Add more states and cities...
      ],
    },
    {
      name: "India",
      states: [
        {
          name: "Maharashtra",
          cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
        },
        {
          name: "Karnataka",
          cities: ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belgaum"],
        },
        // Add more states and cities...
      ],
    },
    // Add more countries...
  ],
};

function LocationSelector() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset state and city when country changes
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity(""); // Reset city when state changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const selectedCountryData = data.countries.find(
    (country) => country.name === selectedCountry
  );
  const selectedStateData = selectedCountryData?.states.find(
    (state) => state.name === selectedState
  );

  return (
    <div>
      <h2>Select Location</h2>

      {/* Country Select */}
      <div>
        <label>Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {data.countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Select */}
      {selectedCountry && (
        <div>
          <label>State: </label>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {selectedCountryData?.states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* City Select */}
      {selectedState && (
        <div>
          <label>City: </label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {selectedStateData?.cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default LocationSelector;
