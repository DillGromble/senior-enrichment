import React from 'react';
import { Link } from 'react-router';


const AllCampuses = props => (
  <div className="row">
    {
      props.allCampuses
        .map( campus => (
          <div className="col-xs-4" key={ campus.id }>
            <Link className="thumbnail" to={`/campuses/${ campus.id }`}>
              <img src={ campus.image } />
              <div className="caption">
                <h5>
                  <span>{ campus.name }</span>
                </h5>
              </div>
            </Link>
          </div>
        ))
    }
  </div>
)

export default AllCampuses;
