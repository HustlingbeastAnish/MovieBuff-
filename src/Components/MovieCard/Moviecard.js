import React from "react";

function Moviecard(props) {
  return (
    <div className="flex justify-center mt-16 border-black" key={props.elem.id}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-[350px]" src={props.elem.image} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.elem.title}</div>
          <p className="text-gray-700 text-base"></p>
          <p className="text-gray-700 text-2xl">
            {props.flag ? props.elem.crew : props.elem.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <i className="fa-brands fa-imdb fa-2xl">{props.elem.imDbRating}</i>

          {props.flag ? (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Coming soon
            </span>
          ) : (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Most Relevant
            </span>
          )}
          {props.flag ? (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {props.elem.year}
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
}

export default Moviecard;
