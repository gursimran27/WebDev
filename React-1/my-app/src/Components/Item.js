
import './Item.css';

function Item(props){

  const brand=props.name;
    return(
        <div>

            <p className="a">{brand}</p>
            <p>{props.children}</p>;

        </div>
    );
}

export default Item;