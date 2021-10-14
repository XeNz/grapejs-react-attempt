import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { EditorConfig } from 'grapesjs';
// @ts-ignore
import { useEffect } from 'react';
import { LocalStoragePrefix } from './LocalStorageDefaults';

interface MjmlComponentProperties {
  mjmlContent: string,
  editorConfig: EditorConfig
}


function storeInLocalStorage(mjmlContent: string): void {
  const localStorageKey = `${LocalStoragePrefix}html`;
  localStorage.removeItem(localStorageKey);
  localStorage.setItem(localStorageKey, JSON.stringify(mjmlContent)); // im still not sure if this needs to be json stringified
}

function addSaveButtonBehavior(editor: grapesjs.Editor) {
  editor.Panels.addButton('options', {
    id: 'save-db',
    className: 'fa fa-floppy-o',
    //@ts-ignore
    command: (editor, sender) => {
      sender && sender.set('active'); // turn off the button
      editor.store();
    },
    attributes: {
      title: 'Save DB'
    }
  });

  // save additional data to grapesjs storage
  editor.on('storage:start:store', (objectToStore) => {
    //@ts-ignore
    objectToStore.mjml = editor.runCommand('mjml-get-code').html;
  });
}


const MJMLComponent = ({ mjmlContent, editorConfig }: MjmlComponentProperties) => {

  useEffect(() => {
    storeInLocalStorage(mjmlContent);
    let editor = grapesjs.init(editorConfig);
    addSaveButtonBehavior(editor);
  });

  return <div id="gjs"></div >;
}
export default MJMLComponent;