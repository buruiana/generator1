import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/theme/github';
import AceTabs from '../AceTabs';

const onChange = newValue => {
  console.log('change', newValue);
}

const Ace = props => {

  const getAceContent = () => {
    switch (props.aceTab) {
      case 'reducer':
        return props.reducer;
      case 'index':
        return props.saga;
      case 'actions':
        return props.actions.importsCode + props.actions.exportsCode;
      case 'actionTypes':
        return props.actionTypez;
      case 'hoc':
        return props.hoc;
      default:
        return '';
    }
  };

  return (
    <div>
      <AceTabs />
      <AceEditor
        mode="jsx"
        theme="xcode"
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
        fontSize={12}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={getAceContent()}
      />
    </div>

  );
};

export default Ace;