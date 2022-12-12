import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Moviecard from "../MovieCard/Moviecard";

function Landing(props) {
  const [user, setuser] = useState([{}]);
  const [flag, setflag] = useState(true);
  // This ensures that the content loads only once
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    axios
      .get(`https://imdb-api.com/API/MostPopular${props.category}/k_jkfn1f42`)
      .then((res) => {
        setflag(true);
        setuser(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Having a variable for the movie name to be searched
  const [handle, sethandle] = useState(null);
  const SearchDetails = () => {
    axios
      .get(`https://imdb-api.com/API/SearchMovie/k_jkfn1f42/${handle}`)
      .then((res) => {
        setflag(false);
        setuser(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setuser([{}]);
      });
  };

  return (
    <>
      <div className="bg-gray-900 bg-homebg h-[690px] bg-no-repeat bg-cover flex justify-center items-center">
        <div>
          {props.category === "Movies" ? (
            <h2 className="text-white text-6xl">
              Get detials of favorite Movies
            </h2>
          ) : (
            <h2 className="text-white text-6xl">
              Get detials of favorite TV Shows
            </h2>
          )}
          {props.category === "Movies" ? (
            <p className="text-white mx-44 my-8">
              Drop down your Favourite Movies
            </p>
          ) : (
            <p className="text-white mx-44 my-8">
              Drop down your Favourite TV Shows
            </p>
          )}
          <div>
            <form action="">
              <input
                type="text"
                className="w-2/5 h-12 items-center border-double border-black-500 text-center mx-48"
                placeholder="for eg :Shawshank Redemption"
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
              />
            </form>
            <button
              className="text-white mx-72 my-8 bg-gray-800 h-10 rounded-2xl w-32 hover:text-red-600 hover:scale-110 hover:bg-gray-900 font-semibold text-xl"
              onClick={SearchDetails}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          {user.map((elem) => {
            return <Moviecard flag={flag} elem={elem} />;
          })}
        </div>
        <a
          href="/#"
          className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Previous
        </a>
        <a
          href="/#"
          className="inline-flex float-right items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}

export default Landing;
