import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import grapesjs from 'grapesjs';

function App() {

  var editor = grapesjs.init({
    height: '100%',

    container: '#gjs',
    fromElement: true,

    storageManager: {
      id: 'gjs-',             // Prefix identifier that will be used on parameters
      type: 'local',          // Type of the storage
      autosave: true,         // Store data automatically
      autoload: true,         // Autoload stored data on init
      stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
    },

    plugins: [
      'grapesjs-mjml'
    ],
    pluginsOpts: {
      'grapesjs-mjml': {
        resetDevices: false // so we can use the device buttons
      }
    }

  });

  // ---- Save Button
  editor.Panels.addButton('options', {
    id: 'save-db',
    className: 'fa fa-floppy-o',
    command: (editor: { store: () => void; }, sender: { set: (arg0: string) => any; }) => {
      sender && sender.set('active'); // turn off the button
      editor.store()
    },
    attributes: {
      title: 'Save DB'
    }
  });

  // save additional data to grapesjs storage
  editor.on('storage:start:store', (objectToStore: { mjml: any; }) => {
    // check if we use mjml plugin
    if (editor.getConfig().plugins.includes('grapesjs-mjml')) {
      // save converted html from mjml
      // see LocalStorage on what is saved.
      objectToStore.mjml = editor.runCommand('mjml-get-code').html;
    }
  });

  return (
    <Fragment>
      <div id="gjs"></div>
    </Fragment>
  );
}

export default App;
