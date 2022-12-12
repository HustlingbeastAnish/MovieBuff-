import React from "react";

function popmovie(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex justify-center mt-16 border-black" key={props.id}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-[350px]" src={props.image} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base"></p>
            {/* <p className="text-gray-700 text-base">{props.crew}</p> */}
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              IMDB Rating {props.imDbRating}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Coming Soon
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default popmovie;
