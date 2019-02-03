import React from "react";

class AddPerson extends React.Component {
  handleFirstNameChange = e => {
    e && e.preventDefault();
    const { saveFirstName } = this.props;
    saveFirstName && saveFirstName(e.target.value);
  };

  handleLastNameChange = e => {
    e && e.preventDefault();
    const { saveLastName } = this.props;
    saveLastName && saveLastName(e.target.value);
  };

  submitItem = e => {
    const { getPerson, addPersonToList, resetPerson } = this.props;
    const person = getPerson && getPerson();
    if (person && person.firstName !== "" && person.lastName !== "") {
      addPersonToList && addPersonToList(person);
      resetPerson && resetPerson();
    }
  };

  render() {
    const { getPerson } = this.props;
    const person = getPerson && getPerson();
    return (
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={person.firstName}
          onChange={this.handleFirstNameChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={person.lastName}
          onChange={this.handleLastNameChange}
        />
        <button onClick={this.submitItem}>Add</button>
      </div>
    );
  }
}

export default AddPerson;
