import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Landing(props) {
  const [user, setuser] = useState([{}]);
  const [flag, setflag] = useState(true);
  // This ensures that the content loads only once
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    axios
      .get(`https://imdb-api.com/API/MostPopular${props.category}/k_0m3vqtty`)
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
      .get(`https://imdb-api.com/API/SearchMovie/k_0m3vqtty/${handle}`)
      .then((res) => {
        setflag(false);
        setuser(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        props.ShowAlert();
        // window.alert("Enter Valid Movie Name");
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
        {/* <button
          onClick={fetchDetails}
          className="bg-slate-800 border-black text-white p-2 m-2 rounded-2xl hover:scale-110 hover:bg-black-900 hover:text-red-400"
        >
          Movies
        </button> */}
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
      </div>
    </>
  );
}

export default Landing;
