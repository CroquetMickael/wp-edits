import React, { useState, useEffect, FunctionComponent } from "react";
import { ArticleComponent } from "./Article.component";
import { ArticleService } from "./Article.service";
import { Article } from "../../Common/Interface/Article.interface";
interface routerProps {
  articleId: number;
}

type ArticleContainerProps = FunctionComponent<{ articleId: number } | any>;
const ArticleContainer: ArticleContainerProps = props => {
  const [article, setArticle] = useState<Article>({
    contenu: "",
    id: 0,
    image_entete: { size: 0, type: "", slice: {} },
    statut: "",
    titre: ""
  });
  const ArticleProps = {
    article: article
  };
  useEffect(() => {
    ArticleService(setArticle, props.articleId);
  }, []);
  return <ArticleComponent {...ArticleProps} />;
};

export { ArticleContainer };
