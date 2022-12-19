import { EditorNodeDef, EditorNodeProperties } from 'node-red';

export interface LowerCaseEditorProperties extends EditorNodeProperties {
    cluster: string;
    prefix: string;
    foo: string;
}

const LowerCaseEditor: EditorNodeDef<LowerCaseEditorProperties> = {
    category: 'function',
    color: '#a6bbcf',
    defaults: {
        name: {value:""},
        foo: {value: ""},
        prefix: {value: ""},
        cluster: {value: "", type: "cluster-config"}
    },
    inputs:1,
    outputs:1,
    icon: "file.png",
    label: function() {
        return this.name||"lower-case";
    }
}

export default LowerCaseEditor;
