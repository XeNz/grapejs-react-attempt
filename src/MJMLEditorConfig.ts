import { EditorConfig } from 'grapesjs';
// @ts-ignore
import grapesJSMJML from 'grapesjs-mjml'
import { LocalStoragePrefix } from './LocalStorageDefaults';

const editorConfig: EditorConfig = {
    container: '#gjs',
    height: '30rem',
    width: '80%',
    // fromElement: true,
    storageManager: {
        id: LocalStoragePrefix,             // Prefix identifier that will be used on parameters
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
    },

    plugins: [
        grapesJSMJML
    ],
    pluginsOpts: {
        [grapesJSMJML]: {
            resetDevices: false // so we can use the device buttons
        }
    }
};

export { editorConfig as MJMLEditorConfig };