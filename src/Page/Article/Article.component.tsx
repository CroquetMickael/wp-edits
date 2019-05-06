import React from "react";
import { Article } from "../../Common/Interface/Article.interface";
import { Layout } from "../../Component/Layout/Layout.component";
interface ArticleComponentProps {
  article: Article;
}
const ArticleComponent = (props: ArticleComponentProps) => (
  <Layout>
  </Layout>
);

export { ArticleComponent };
