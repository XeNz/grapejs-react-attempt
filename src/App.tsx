import './App.css';
import 'grapesjs/dist/css/grapes.min.css';
// @ts-ignore
import MailBody from './MailBody';
import MJMLComponent from './MJMLComponent';
import { MJMLEditorConfig } from './MJMLEditorConfig';

function App() {
  return <MJMLComponent editorConfig={MJMLEditorConfig} mjmlContent={MailBody} ></MJMLComponent>;
}

export default App;
