import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatabaseView from '../components/DatabaseView';
import * as editor from '../reducers/';
import DATABASE_INFO_QUERY from '../graphql/MySQLTable.graphql';

class Database extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    edges: PropTypes.array
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
    console.log('nextProps', nextProps);
  }

  render() {
    return <DatabaseView {...this.props} />;
  }
}

const DatabaseWithApollo = compose(
  graphql(DATABASE_INFO_QUERY, {
    options: () => {
      return {
        variables: { database: 'generator1', table: 'component' }
      };
    },
    props: ({ data }) => {
      const { loading, error, mySQLTable } = data;
      if (error) throw new Error(error);
      return { loading, mySQLTable };
    }
  })
)(Database);

const mapStateToProps = state => {
  return {
    getModalVisible: editor.getModalVisible(state),
    getModalContent: editor.getModalContent(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setModalVisibility: modalVisible => editor.setModalVisibility(modalVisible),
      setModalContent: modalContent => editor.setModalContent(modalContent)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseWithApollo);
