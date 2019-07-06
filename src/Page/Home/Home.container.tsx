import React, { useState, useEffect } from "react";
import { HomeComponent } from "./Home.component";
import { HomeService } from "./Home.service";
import { Article } from "../../Common/Interface/Article.interface";
const HomeContainer = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    HomeService(setArticles);
  }, []);
  const HomeProps = {
    articles
  };
  return <HomeComponent {...HomeProps} />;
};

export { HomeContainer };
