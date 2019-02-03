import React from "react";
import { connect } from 'react-redux';
import AddPerson from "../components/AddPerson";
import { saveFirstName, saveLastName, addPersonToList, resetPerson } from '../actions/people';
import { getPerson } from '../selectors/people';

class AddPersonContainer extends React.Component {
  render() {
    return <AddPerson {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    getPerson: () => getPerson(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFirstName: firstName => {
      dispatch(saveFirstName(firstName));
    },
    saveLastName: lastName => {
      dispatch(saveLastName(lastName));
    },
    addPersonToList: person => {
      dispatch(addPersonToList(person));
    },
    resetPerson: () => {
      dispatch(resetPerson());
    },
  };
};

AddPersonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPersonContainer);

export default AddPersonContainer;
