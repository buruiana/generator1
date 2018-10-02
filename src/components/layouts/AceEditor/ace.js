import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/theme/github';

const onChange = newValue => {
  console.log('change', newValue);
}

const Ace = props => {
  console.log('console: ---------', props);
  return (
    <AceEditor
      mode="jsx"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.actionTypez + '\n' + props.actions.importsCode + '\n' + props.actions.exportsCode}
    />
  );
};

export default Ace;