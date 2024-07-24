
import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct(props){


    // lifting up concept
    function saveProduct(data){
        console.log("i am inside the newProduct component");

        // sending this data to its parent i.e App.js
        // calling parent function
        props.printProduct(data);
    }

    return(
        <div className="new-product">
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    );

}

export default NewProduct;