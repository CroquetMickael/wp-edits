import React, { useState, useEffect } from "react";
import { NewArticleComponent } from "./NewArticle.component";
import { convertToRaw, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
const NewArticleContainer = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorStateHtml, setEditorStateHtml] = useState({
    __html: stateToHTML(editorState.getCurrentContent())
  });
  const [title, setTitle] = useState("");

  const handleTitleChange = event => {
    if (event && event.target) {
      setTitle(event.target.value);
    }
  };

  useEffect(() => {
    setEditorStateHtml(stateToHTML(editorState.getCurrentContent()));
  }, [editorState]);

  const onClickButton = () => {
    console.log(editorStateHtml);
  };

  const newArticleProps = {
    title,
    handleTitleChange,
    editorState,
    editorStateHtml,
    setEditorState,
    onClickButton
  };

  return <NewArticleComponent {...newArticleProps} />;
};

export { NewArticleContainer };
