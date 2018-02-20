import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { bindActionCreators } from 'redux';
import EditorView from '../components/EditorView';
import * as editor from '../reducers/';
import COMPONENTS_WITH_PROPS_QUERY from '../graphql/ComponentsWithPropsQuery.graphql';

class Editor extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    components: PropTypes.object,
    subscribeToMore: PropTypes.func.isRequired,
    setComponents: PropTypes.func,
    setTree: PropTypes.func,
    setDefaultTree: PropTypes.func,
    componentsWithProps: PropTypes.object,
    edges: PropTypes.array,
    getComponents: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.subscription = null;
    this.props = props;
    this.createDefaultTree = this.createDefaultTree.bind(this);
    this.prepareComponentList = this.prepareComponentList.bind(this);
    this.setComponentList = this.setComponentList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.componentsWithProps && nextProps.componentsWithProps.edges && !this.props.getComponents.length) {
      this.prepareComponentList(nextProps.componentsWithProps);
    }
  }

  prepareComponentList(props) {
    const prop = x => {
      return {
        id: x.propId,
        name: x.propName,
        description: x.propDescription,
        type: x.propType
      };
    };

    const componentList = _.chain(props.edges)
      .groupBy('componentId')
      .map(function(v) {
        return {
          id: v[0].componentId,
          name: v[0].componentName,
          description: v[0].componentDescription,
          provider: v[0].componentProvider,
          props: _.map(v, prop)
        };
      })
      .value();
    this.setComponentList(componentList);
  }

  setComponentList(componentList) {
    this.props.setComponents(componentList);
    this.createDefaultTree(componentList);
  }

  createDefaultTree(components) {
    let tree = [];

    if (components) {
      components.map(component => {
        tree.push({
          title: component.name + ' - ' + component.provider,
          props: component.props
        });
      });
      this.props.setDefaultTree(tree);
    }
  }

  render() {
    return <EditorView {...this.props} />;
  }
}

const EditorWithApollo = compose(
  graphql(COMPONENTS_WITH_PROPS_QUERY, {
    options: () => {
      return {
        variables: { limit: 100, after: 0 }
      };
    },
    props: ({ data }) => {
      const { loading, error, componentsWithProps, subscribeToMore } = data;

      if (error) throw new Error(error);
      return { loading, componentsWithProps, subscribeToMore };
    }
  })
)(Editor);

const mapStateToProps = state => {
  return {
    getComponents: editor.getComponents(state),
    getTree: editor.getTree(state),
    getDefaultTree: editor.getDefaultTree(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setComponents: components => editor.setComponents(components),
      setTree: tree => editor.setTree(tree),
      setDefaultTree: tree => editor.setDefaultTree(tree)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorWithApollo);
