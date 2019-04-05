import React, { useState, useEffect } from "react";
import { ArticleComponent } from "./Article.component";
import { ArticleService } from "./Article.service";
interface ArticleContainerProps {
  articleId: number;
}
const ArticleContainer = (props: any) => {
  const [article, setArticle] = useState({});
  const ArticleProps = {
    article
  };
  useEffect(() => {
    ArticleService(setArticle, props.articleId);
  }, []);
  return <ArticleComponent {...ArticleProps} />;
};

export { ArticleContainer };
