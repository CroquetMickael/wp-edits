import React from "react";
import { Layout } from "../../Component/Layout/Layout.component";
import { navigate } from "@reach/router";
import { Article } from "../../Common/Interface/Article.interface";
import { ArticleCard } from "../../Component/ArticleCard/ArticleCard.component";

interface HomeProps
  extends Readonly<{
    articles: Article[];
  }> {}

const HomeComponent = (props: HomeProps) => (
  <Layout>
    <div className="flex flex-wrap overflow-auto justify-center">
      {props.articles.map((article, index) => (
        <ArticleCard {...article} key={index}/>
      ))}
    </div>
  </Layout>
);

export { HomeComponent };
