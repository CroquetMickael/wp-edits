import React from "react";
import { Layout } from "../../Component/Layout/Layout.component";
import { navigate } from "@reach/router";
import { Article } from "../../Common/Interface/Article.interface";

interface HomeProps
  extends Readonly<{
    articles: Article[];
  }> {}

const HomeComponent = (props: HomeProps) => (
  <Layout>
    <div className="flex flex-wrap mb-4 overflow-auto justify-center">
      <div className="w-full mx-6">TEST</div>
      {props.articles.map((article, index) => (
        <div
          className="w-1/4 h-72 rounded overflow-hidden sm:mx-2 mx-6 my-2 relative shadow-lg bg-white"
          key={index}
        >
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-base mb-2">{article.titre}</div>
            <p className="text-grey-darker text-base truncate">{article.contenu}</p>
          </div>
          <div className="flex absolute w-full pin-b mb-2">
            <div className="w-1/2 bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
              {article.statut}
            </div>
            <div className="w-1/2">
            <span
              className="rounded-full h-10 w-10 flex items-center justify-center bg-grey cursor-pointer float-right  mx-2"
              onClick={() => navigate(`/article/${article.id}`)}
            >
              Circle
            </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export { HomeComponent };
