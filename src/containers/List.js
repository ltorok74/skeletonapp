import React from "react";
import { connect } from 'react-redux';
import List from "../components/List";
import { getPeopleList } from '../selectors/people';

class ListContainer extends React.Component {
  render() {
    return <List {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    getPeopleList: () => getPeopleList(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainer;
