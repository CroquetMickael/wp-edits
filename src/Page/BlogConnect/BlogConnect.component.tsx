import React from "react";
import { Layout } from "../../Component/Layout/Layout.component";
interface BlogConnectProps {
  url: string;
}
const BlogConnectComponent = (props: BlogConnectProps) => (
  <>
    <Layout>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        className="w-full h-screen"
        src={props.url}
      />
    </Layout>
  </>
);

export { BlogConnectComponent };
