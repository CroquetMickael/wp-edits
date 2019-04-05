import React, { useState, useEffect } from "react";
import { HomeComponent } from "./Home.component";
import { HomeService } from "./Home.service";
const HomeContainer = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    HomeService(setArticles);
  }, []);
  const HomeProps = {
    articles
  };
  return <HomeComponent {...HomeProps} />;
};

export { HomeContainer };
