import PaginationItem from '../UI/paginationItem/PaginationItem';
import './PaginationList.scss'

import React from "react";

const PaginationList = () => {

const paginationCostLink = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    return ( 
        <div className="pagination_wrapper">
          <ul className="paginatop_row">
            {paginationCostLink.map((el) => (
                <PaginationItem el={el}/>
            ))}
          </ul>
        </div>
     );
}
 
export default PaginationList;