import Card from "../Components/Card";

// insted of {tours} we can also use props
function Tours({tours, removeTour}){
    return(
        <div className="container">

            <div>
                <h2 className="title">Plan with Love</h2>
            </div>

            <div className="cards">
            {/* placeholding */}
                {
                    tours.map( (element) =>{
                        return <Card key={element.id} {...element}  removeTour={removeTour}></Card>
                        {/* in each card we pass its data as copy using spred operator */}
                    })
                }
            </div>

        </div>
    );
}


export default Tours;