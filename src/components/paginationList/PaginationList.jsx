import PaginationItem from '../UI/paginationItem/PaginationItem';
import './PaginationList.scss'

import React from "react";

const PaginationList = () => {

const paginationCostLink = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// костыль
const elements = paginationCostLink.map((number, index) => {
    if (index < 3 || index === paginationCostLink.length - 1) {
        if (index === 0) {
         return   <li key={number} className='active'>{number} </li>;
        }
      return <li key={number}>{number} </li>;
    } else if (index === 3) {
      return <li key={index}>... </li>;
    }
    return null;
  });
  // костыль

    return ( 
        <div className="pagination_wrapper">
          <ul className="paginatop_row">
            {elements.map((el) => (
                <PaginationItem el={el}/>
            ))}
          </ul>
        </div>
     );
}
 
export default PaginationList;