import './App.css';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { EditorConfig } from 'grapesjs';
// @ts-ignore
import grapesJSMJML from 'grapesjs-mjml'
import { useEffect } from 'react';
import Mailbody from './Mailbody';
import MJMLComponent from './MJMLComponent';
import { MJMLEditorConfig } from './MJMLEditorConfig';

function App() {

  return <MJMLComponent editorConfig={MJMLEditorConfig} mjmlContent={Mailbody} ></MJMLComponent>;
}

export default App;
