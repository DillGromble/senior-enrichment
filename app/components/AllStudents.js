import React from 'react';
import { Link } from 'react-router';


const AllStudents = props => (
  <h1>All Students Here!</h1>
)

export default AllStudents;

  // <div className="row">
  //   {
  //     props.allStudents
  //       .map( student => (
  //         <div className="col-xs-4" key={ student.id }>
  //           <Link className="thumbnail" to={`/Students/${ student.id }`}>
  //             <img src={ campus.image } />
  //             <div className="caption">
  //               <h5>
  //                 <span>{ campus.name }</span>
  //               </h5>
  //             </div>
  //           </Link>
  //         </div>
  //       ))
  //   }
  // </div>
