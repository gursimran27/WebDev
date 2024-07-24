
import './itemdate.css';

function Itemdate(props){
    const day=props.day;
    const year=props.year;
    const month=props.month;
    return(
        <div className="b">
            <span>{day} </span>
            <span>{month} </span>
            <span>{year}</span>
        </div>
    );
}

export default Itemdate;