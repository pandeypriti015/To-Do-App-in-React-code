import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
        return <div className ="list" key ={item.Key}>
            <p>{item.text}
            <span>
                <FontAwesomeIcon className="faicons"
                 icon='trash'onClick= { () => props.deleteItem(item.key)
                 }/>
            </span>
            </p>

        </div>
})

    return(
        <div>{listItems}</div>   
    
    )
}
export default ListItems;
