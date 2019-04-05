import React from "react";
import { Article } from "../../Common/Interface/Article.interface";
import { Layout } from "../../Component/Layout/Layout.component";
const ArticleComponent = (props: any) => (
  <Layout>
    <div className="flex flex-wrap mb-4 overflow-auto  content-center justify-center">
      <div className="w-full rounded overflow-hidden bg-white shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.article.titre}</div>
          <p className="text-grey-darker text-base">
           {props.article.contenu}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
           {props.article.statut}
          </span>
        </div>
      </div>
    </div>
  </Layout>
);

export { ArticleComponent };
