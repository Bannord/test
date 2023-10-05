const PaginationItem = ({el}) => {
    return ( 
        <li className={`pagination_link ${el === 1 ? 'active' : ''}`}>{el}</li>
     );
}
 
export default PaginationItem;