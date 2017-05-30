import React from 'react';
import { Link } from 'react-router';
import SearchFilter from '../components/SearchFilter';


const NameCampusTable = props => {
  return (
    <div className="nameTable">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Campus</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            props.people.map( person => (
              <tr key={ person.id }>
                <td>{ person.name }</td>
                <td>
                  <Link to={`/campuses/${person.campus.id}`}>
                    { person.campus.name}
                  </Link>
                </td>
                <td className="btnCell">
                  <span className="glyphicon glyphicon-remove-circle" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}


export default NameCampusTable;
