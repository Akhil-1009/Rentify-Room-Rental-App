import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from "./searchauthcompletecomponent.module.css";

const listStyle = {
  listStyle: 'none',
  padding: 0,
  backgroundColor: 'white',
  // width: "50%",

};
const suggestionStyle = {
  cursor: 'pointer',
  backgroundColor: 'white',
  // width: "50%",

};
const inputStyle = {
  padding: '8px',
  fontSize: '16px',
  // width: '40%',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: 'white',
};


const SearchAutocompleteComponent = ({ search, setSearch }) => {
  // const [query, setQuery] = useState(ad.completeMap);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  console.log("SearchAutocompleteComponent rendered");




  // console.log(ad?.address);
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    // Make an API request to get autocomplete suggestions
    fetch(
      `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${value}&apiKey=Bi7MK6vXGFRFuS3pXjuJwIAU6oH3R1o8qVGlR9UVUuQ`
    )
      .then((response) => response.json())
      .then((data) => {
        const reversedSuggestions = data?.suggestions?.map((suggestion) => ({
          ...suggestion,
          label: suggestion.label.split(',').reverse().join(','),
        }));
        setSuggestions(reversedSuggestions);
      })
      .catch((error) => console.error(error));
  };

  const handleSuggestionClick = (suggestion) => {
    // console.log(suggestion);

    setSearch({
      ...search, address: suggestion, label: suggestion.label, street: suggestion?.address?.street || "", city: (suggestion?.address?.city || ""),
      district: suggestion?.address?.district || "", country: suggestion?.address?.country || "", matchLevel: suggestion?.matchLevel || ""
    });
    setQuery(suggestion.label);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for address.."
        style={inputStyle}
      />
      <ul style={listStyle}>
        {Array.isArray(suggestions) && suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <li
              key={suggestion.label}
              style={suggestionStyle}
              onClick={() => {
                handleSuggestionClick(suggestion);
                // console.log(suggestion);
                // onChange = {(e) => setAd({...ad, bedrooms: e.target.value })}
                // setSearch({ ...search, address: suggestion });
              }}
            >
              {suggestion.label}
            </li>
          ))
        ) : (
          <li></li>
        )}
      </ul>
    </div >
  );
};

export default SearchAutocompleteComponent;


