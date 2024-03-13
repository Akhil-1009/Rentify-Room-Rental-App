import React, { useState } from 'react';
import { useEffect } from 'react';

const listStyle = {
  listStyle: 'none',
  padding: 0,
  paddingLeft: '5px'

};
const suggestionStyle = {
  cursor: 'pointer',
  fontSize: '15px',
};
const inputStyle = {
  padding: '8px',
  fontSize: '17px',
  fontWeight: 'bolder',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '5px',
};


const AutocompleteComponent = ({ ad, setAd }) => {
  // const [query, setQuery] = useState(ad.completeMap);
  const [query, setQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  // console.log("ad complete map value in autoCompleteComenent.js", ad);
  console.log("AutocompleteComponent rendered");

  // useEffect(() => {
  //   setAd({ ...ad, completeMap: ad?.completeMap });
  // }, []);


  // }, [ad.completeMap]);
  // console.log("ad adress value", ad.address);



  // console.log(ad?.address);
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    // Make an API request to get autocomplete suggestions
    fetch(
      // `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=${value}&apiKey=d9ce2b321735842012daee487cdc5f01`
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

    // setAd({ ...ad, completeMap: suggestion });
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
                setAd({ ...ad, address: suggestion })
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

export default AutocompleteComponent;


