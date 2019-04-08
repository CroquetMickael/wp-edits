import React, { useState, useEffect, FunctionComponentElement, Component } from "react";
import { ArticleComponent } from "./Article.component";
import { ArticleService } from "./Article.service";
import { Article } from "../../Common/Interface/Article.interface";

const ArticleContainer = (props: any) => {
  const [article, setArticle] = useState<Article>({
    contenu: "",
    id: 0,
    image_entete: { size: 0, type: "", slice: {} },
    statut: "",
    titre: "",
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
