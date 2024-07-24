import { useState } from "react";
import "./App.css";

function App() {
  // /form data will store an object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVissible: false,
    vehicle: "",
    mode:""
  });

  // console.log(formData); //just for checking

  //  function changeHandler(e){
  //   setFormData(
  //       (prev) =>{
  //         // prev is not an keyword it just the previous state of useState variable
  //         return ( {...prev, [e.target.name] : e.target.value })
  //retrun an object of previous state and with the new value of the input that is being changed
  //         // e.target.name ....repressent the name of input
  //       }
  //   )
  // }

                            // *! OR

  function changeHandler(e) {
    // destructruing of object
    const { type, name, value, checked } = e.target;
    // e.target is the clicked element

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }; //retrun an object of previous state and with the new value of the input that is being changed and rest all the other values of input tags are maintained
    });
  }

  function submitHandler(e) {
    e.preventDefault(); //it prevent the default behaviour of the submit button i.e it will not clear the values from all niput tags

    console.log("printing the final result...");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          //best practice name of input must be same as of the useState object key
          onChange={changeHandler}
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="last name"
          name="lastName"
          //best practice name of input must be same as of the useState object key
          onChange={changeHandler}
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="enter your email"
          name="email"
          //best practice name of input must be same as of the useState object key
          onChange={changeHandler}
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          name="comments"
          placeholder="enter your comments here"
          value={formData.comments}
          onChange={changeHandler}
        />

        <br />
        <br />

        <input
          type="checkbox"
          name="isVissible"
          // instead of value here we have checked
          checked={formData.isVissible}
          id="isVissible"
          // id is for label for
          onChange={changeHandler}
        />

        <label htmlFor="isVissible">am i vissible</label>

        <br />
        <br />

        <fieldset>
          <legend>mode</legend>

          <input
            type="radio"
            name="mode"
            value="online-mode"
            checked={formData.mode === "online-mode"}
            onChange={changeHandler}
            id="online-mode"
          />

          <label htmlFor="online-mode">online</label>

          <br />

          <input
            type="radio"
            name="mode"
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
            onChange={changeHandler}
            id="offline-mode"
          />

          <label htmlFor="offline-mode">offline</label>
        </fieldset>



        <label htmlFor="vehicle">select your vehicle </label>

        <select
          name="vehicle"
          id="vehicle"
          value={formData.vehicle}
          onChange={changeHandler}
        >
          <option value="">none</option>
          <option value="thar">thar</option>
          <option value="jeep">jeep</option>
          <option value="fortuner">fortuner</option>
        </select>

        <br />
        <br />

        {/* <input
              type="submit"
              value="submit"
            /> */}

        {/* or */}

        <button>Submit</button>

        {/* default behaviour of submit is that it clears the whole content from all input tags */}

        {/* when ever the submit is clicked the the <form> tag will triger the onSubmit  */}
      </form>
    </div>
  );
}

export default App;
