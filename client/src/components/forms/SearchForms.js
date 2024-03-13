// components/forms/SearchForm.js
import { useSearch } from "../../context/search";
import SearchAutocompleteComponent from "./SearchautoCompleteComponent";
import { rentPrices } from "../../helpers/priceList";
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import styles from './searchforms.module.css'; // Import the CSS file

export default function SearchForm() {
  //context


  const [search, setSearch] = useSearch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log(rentPrices); 
  //hooks
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      //no need to send results ,page and price ... only send rest
      const { results, page, price, ...rest } = search;
      const query = queryString.stringify(rest);
      console.log("what to send from search", query);
      const { data } = await axios.get(`/search?${query}`);
      // console.log(data);
      //if any page search is click we can redirect to search page
      if (search?.page !== '/search') {
        setSearch((prev) => ({
          ...prev, results: data,
          loading: false,
        }));
        //if not on search page navigate on search page
        navigate("/search");
      } else {
        setSearch((prev) => ({
          ...prev, results: data,
          page: window.location.pathname,
          loading: false
        }));
      }
    } catch (err) {
      console.log(err);
      setSearch({ ...search, loading: false })
    }
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {

    setSearch({ ...search, ...option, price: "" });
    setDropdownOpen(false);
  };

  const options = [
    { laundry: search.laundry === 'yes' ? 'no' : 'yes', label: 'Laundry' },
    { wifi: search.wifi === 'yes' ? 'no' : 'yes', label: 'Wifi Facility' },
    { ROWater: search.ROWater === 'yes' ? 'no' : 'yes', label: 'ROWater Facility' },
  ];

  return (
    <div className={styles.searchFormContainer}>
      <div className={styles.searchInput}>
        <SearchAutocompleteComponent search={search} setSearch={setSearch} />
      </div>
      <div className={styles.row}>
        <div className={styles.buttoncontainer}>

          {isMobile ? (
            // Render dropdown component outside the navbar for smaller screens
            <>
              <div className={styles.flex}>
                <div>
                  <button
                    onClick={() => setSearch({ ...search, type: "Room", price: "" })}
                    className="btn btn-secondary">{search.type === "Room" ? "✅ Room" : "Room"}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setSearch({ ...search, type: "House", price: "" })}
                    className="btn btn-secondary">
                    {search.type === "House" ? "✅ House" : "House"}
                  </button>
                </div>
                <div className={styles.mobileButtonContainer} style={{ position: 'relative' }}>
                  <button onClick={toggleDropdown} className="btn btn-secondary">
                    filters
                  </button>
                  {dropdownOpen && (
                    <div className={styles.dropdown} style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000 }}>
                      <button
                        onClick={() => setSearch({ ...search, laundry: search.laundry === "yes" ? "no" : "yes" })}
                        className={`${styles.padding1} btn btn-secondary`}>
                        {search.laundry === "yes" ? "✅ Laundry" : "Laundry"}
                      </button>
                      <button
                        onClick={() => setSearch({ ...search, wifi: search.wifi === "yes" ? "no" : "yes" })}
                        className={`${styles.padding1} btn btn-secondary`}>
                        {search.wifi === "yes" ? "✅wifi facility" : "wifi facility"}
                      </button>
                      <button
                        onClick={() => setSearch({ ...search, ROWater: search.ROWater === "yes" ? "no" : "yes" })}
                        className={`${styles.padding1} btn btn-secondary`}>
                        {search.ROWater === "yes" ? "✅ROWater facility" : "ROWater facility"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.flex}>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    &nbsp; {search?.price ? search.price : "Price"}
                  </button>
                  <ul className="dropdown-menu">
                    <>
                      {rentPrices?.map((p) => (
                        <li key={p._id}>
                          <a
                            className="dropdown-item"
                            onClick={() =>
                              setSearch({
                                ...search,
                                price: p.name,
                                priceRange: p.array,
                              })
                            }
                          >
                            {p.name}
                          </a>
                        </li>
                      ))}
                    </>
                  </ul>
                </div>
                <div>
                  <button
                    onClick={handleSearch}
                    className="btn btn-dark">Search <i className='fa fa-search'></i>
                  </button>
                </div>

              </div>


            </>
          ) : (
            // Render other components for full-sized screens
            <>
              <button
                onClick={() => setSearch({ ...search, type: "Room", price: "" })}
                className="btn btn-secondary">{search.type === "Room" ? "✅ Room" : "Room"}
              </button>
              <button
                onClick={() => setSearch({ ...search, type: "House", price: "" })}
                className="btn btn-secondary">
                {search.type === "House" ? "✅ House" : "House"}
              </button>

              <button
                onClick={() => setSearch({ ...search, laundry: search.laundry === "yes" ? "no" : "yes" })}
                className="btn btn-secondary">
                {search.laundry === "yes" ? "✅ Laundry" : "Laundry"}
              </button>
              <button
                onClick={() => setSearch({ ...search, wifi: search.wifi === "yes" ? "no" : "yes" })}
                className="btn btn-secondary">
                {search.wifi === "yes" ? "✅wifi facility" : "wifi facility"}
              </button>
              <button
                onClick={() => setSearch({ ...search, ROWater: search.ROWater === "yes" ? "no" : "yes" })}
                className="btn btn-secondary">
                {search.ROWater === "yes" ? "✅ROWater facility" : "ROWater facility"}
              </button>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  &nbsp; {search?.price ? search.price : "Price"}
                </button>
                <ul className="dropdown-menu">
                  <>
                    {rentPrices?.map((p) => (
                      <li key={p._id}>
                        <a
                          className="dropdown-item"
                          onClick={() =>
                            setSearch({
                              ...search,
                              price: p.name,
                              priceRange: p.array,
                            })
                          }
                        >
                          {p.name}
                        </a>
                      </li>
                    ))}
                  </>
                </ul>
              </div>

              <button
                onClick={handleSearch}
                className="btn btn-dark">Search <i className='fa fa-search'></i>
              </button>
            </>

          )}
        </div>
      </div>

    </div>
  );
}


