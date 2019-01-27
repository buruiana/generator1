import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/theme/github';
import AceTabs from '../AceTabs';
import {
  SERVICE,
  COMPONENT,
  SMART,
} from '../../../utils/constants';

const onChange = newValue => {
  console.log('change1', newValue);
}

const Ace = props => {

  const getAceContent = () => {
    if (props.projectSettings.projectType === SERVICE) {
      switch (props.aceTab) {
        case 'reducer':
          return props.reducer;
        case 'index':
          return props.saga;
        case 'actions':
          return props.actions;
        case 'actionTypes':
          return props.actionTypez;
        default:
          return '';
      }
    } else if (props.projectSettings.projectType === COMPONENT) {
      switch (props.aceTab) {
        case 'index':
          return props.hoc;
        case 'styles':
          return props.styles;
        case 'schema':
          return props.schema;
        case 'uiSchema':
          return props.uiSchema;
        case props.projectSettings.projectName:
          if (props.projectSettings.componentType === SMART) {
            return props.smart;
          } else {
            return props.dumb;
          }
        default:
          return '';
      }
    }
  };

  const getAceStyle = (props.projectSettings.projectType === SERVICE)
    ? 'serviceAce'
    : 'componentAce';

  return (
    <div className={getAceStyle}>
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
        height='750px'
      />
    </div>

  );
};

export default Ace;