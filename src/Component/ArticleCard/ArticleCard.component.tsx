import React from "react";
import { navigate } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ArticleCard = (props: any) => (
  <div
    className="w-1/3 md:w-1/4 h-72 rounded overflow-hidden sm:mx-2 
          mx-6 my-2 relative shadow-lg bg-white animated fadeIn"
  >
    <img
      className="w-full"
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-base mb-2">{props.titre}</div>
      <p className="text-grey-darker text-base truncate">{props.contenu}</p>
    </div>
    <div className="flex absolute w-full pin-b mb-2">
      <div
        className="w-1/3 bg-grey-lighter rounded-full px-3 py-1 text-sm 
            font-semibold text-grey-darker mr-2"
      >
        {props.statut}
      </div>
      <div className="w-full">
        <span
          className="flex items-center justify-center 
              cursor-pointer float-right text-center"
          onClick={() => navigate(`/article/${props.id}`)}
        >
          <FontAwesomeIcon icon="eye" className="text-blue" />
          <span className="text-blue px-2">View</span>
        </span>
      </div>
    </div>
  </div>
);

export { ArticleCard };