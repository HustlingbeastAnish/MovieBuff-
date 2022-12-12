import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
function Landing(props) {
  const [user, setuser] = useState([{}]);
  const [flag, setflag] = useState(true);

  let [fk, setfk] = useState(false);
  // This ensures that the content loads only once
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    axios
      .get(`https://imdb-api.com/API/MostPopular${props.category}/k_0m3vqtty`)
      .then((res) => {
        setflag(true);
        setfk(true);
        setuser(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Having a variable for the movie name to be searched
  const [handle, sethandle] = useState(null);
  const SearchDetails = () => {
    setfk(false);
    axios
      .get(`https://imdb-api.com/API/SearchMovie/k_0m3vqtty/${handle}`)
      .then((res) => {
        setfk(true);
        setflag(false);
        setuser(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        props.ShowAlert();
      });
  };

  return (
    <>
      <div className="bg-gray-900">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 mt-16 ">
            <div className="input-group relative flex flex-row items-stretch w-full mb-4">
              <input
                type="search"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                aria-describedby="button-addon2"
              />
              <button
                className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
                onClick={SearchDetails}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MovieCard component */}
      {/* To Apply Lazzy Loading */}
      {fk === false ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
      {fk && (
        <div className="grid grid-cols-3 gap-4">
          {user.map((elem) => {
            return (
              <div
                className="flex justify-center mt-16 border-black"
                key={elem.id}
              >
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full h-[350px]" src={elem.image} alt="" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{elem.title}</div>
                    <p className="text-gray-700 text-base"></p>
                    <p className="text-gray-700 text-base text-2xl">
                      {flag ? elem.crew : elem.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <i className="fa-brands fa-imdb fa-2xl">
                      {elem.imDbRating}
                    </i>

                    {flag ? (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #Coming soon
                      </span>
                    ) : (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Most Relevant
                      </span>
                    )}
                    {flag ? (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {elem.year}
                      </span>
                    ) : (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Top Searches
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Landing;
