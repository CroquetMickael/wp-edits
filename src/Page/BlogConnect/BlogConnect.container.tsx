import React, { useState, useEffect } from "react";
import { BlogConnectComponent } from "./BlogConnect.component";
import { BlogConnectService } from "./BlogConnect.service";

const BlogConnectContainer = () => {
  const [url, setUrl] = useState<string>("");
  const BlogConnectProps = {
    url
  };
  useEffect(() => {
    BlogConnectService(setUrl);
  });
  return <BlogConnectComponent {...BlogConnectProps} />;
};

export { BlogConnectContainer };
