import React from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';
import AceEditor from 'react-ace';
import 'brace/mode/jsx';
import 'brace/theme/github';

const AppStructureView = props => {

  const onChange = tree => props.setAppTree(tree);

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
        />
      </div>
    </div>
  );
}

export default AppStructureView;