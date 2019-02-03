import React from "react";

class List extends React.Component {
  render() {
    const { getPeopleList } = this.props;
    const peopleList = getPeopleList && getPeopleList();
    return (
      peopleList &&
      peopleList.length > 0 && (
        <div>
          <table>
            <tbody>
              {peopleList.map((person, idx) => (
                <tr key={idx}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default List;
