import React from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import AceEditor from 'react-ace';
import axios from 'axios';
import 'brace/mode/jsx';
import 'brace/theme/github';
import {
  webpackconfigjs,
  packagejson,
} from '../../../services/appSettingsService/code';

const AppStructureView = props => {
  const onChange = tree => props.setAppTree(tree);
  const onClickFile = rowInfo => {
    // if (isEmpty(rowInfo.node.children)) {
    //   props.setAppFile(rowInfo.node.title);
    // }

    const user = {
      name: webpackconfigjs
    };

    axios.post('http://localhost:5000/api/prettify', { user })
      .then(res => console.log('console: res', res))
  };

  const getAceContent = () => {
    switch (props.file) {
      case 'webpack.config.js':
        return webpackconfigjs;
      case 'package.json':
        return packagejson;
      default:
        return props.code;
    }
  };

  const renderView = () => {
    if (props.codeDone) {
      return (
        <div>
          <div
            style={{
              height: 800,
              width: '30%',
              float: 'left'
            }}
          >
            <SortableTree
              treeData={props.tree}
              onChange={onChange}
              theme={FileExplorerTheme}
              generateNodeProps={rowInfo => ({
                onClick: () => onClickFile(rowInfo),
              })}
            />
            />
      </div>
          <div
            style={{
              height: 800,
              width: '70%',
              float: 'right'
            }}
          >
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
              value=''
              width='100%'
              height='100%'
              value={getAceContent()}
            />
          </div>
        </div>
      );
    } else if (props.code){
      return (
        <div
          style={{
            height: 800,
            width: '70%',
            float: 'right'
          }}
        >
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
            value=''
            width='100%'
            height='100%'
            value={props.code}
          />
        </div>
      );
    }
  };

  return (
    <div>
      {renderView()}
    </div>
  );
}

export default AppStructureView;