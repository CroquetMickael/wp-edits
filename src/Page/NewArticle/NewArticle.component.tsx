import React from "react";
import { Layout } from "../../Component/Layout/Layout.component";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { InputComponent } from "../../Component/Input/input.component";

const NewArticleComponent = (props: any) => (
  <Layout>
    <div className="flex w-full">
      <div className="w-1/2 bg-white">
        <Editor
          editorState={props.editorState}
          wrapperClassName="overflow-y"
          editorClassName="mt-20 bg-white h-72 lg:h-80 p-1 overflow-auto"
          toolbarClassName="my-0 z-10 pin-t mt-8 absolute bg-grey"
          onEditorStateChange={props.setEditorState}
        />
      </div>
      <div className="w-1/2 mt-20 bg-grey-lighter h-72 lg:h-80 overflow-auto">
        <h1 className="m-2">{props.title}</h1>
        <div dangerouslySetInnerHTML={{__html: props.editorStateHtml}} />
      </div>
    </div>
    <footer className="bg-white w-full h-full">
      <div className="font-semibold text-black text-center tracking-tight">
        <InputComponent
          type="text"
          className="my-6 mx-2"
          handler={() => props.handleTitleChange(event)}
          label="Titre"
          name="titre"
          value={props.title}
        />
        <button
          className="bg-blue cursor-pointer hover:bg-blue-dark text-center 
                text-white font-bold p-2 mx-32 rounded mb-2"
          onClick={props.onClickButton}
        >
          Sauvegarder
        </button>
      </div>
    </footer>
  </Layout>
);

export { NewArticleComponent };
