import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india", //default we selected india in select tag
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candiadtes: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(e){
  // destructuring of object
    const { type, name, checked, value } = e.target; //it return the clicked element

    setFromData((prev) => {
      return (
        //return an object
        {
          ...prev, //prev is used to maintain all the other input values and prev is not a keyworf
          [name]: type === "checkbox" ? checked : value,
        }
      );
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log("result is...");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName ">firstName </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="love"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="lastName ">lastName </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          placeholder="babbar"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="email ">email </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          placeholder="xyz.@abc.com"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <label htmlFor="country">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={changeHandler}
          id="country"
          className="outline"
        >
          <option value="">none</option>
          <option value="UAE">UAE</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="india">india</option>
          <option value="mexico">mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress ">Street Address </label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          placeholder="b-25C"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="city ">City </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          placeholder="city"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="state ">State </label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          placeholder="state"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="postalCode ">Postal Code </label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          placeholder="pin code"
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="candiadtes"
              checked={formData.candiadtes}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candiadtes">Candiadtes</label>
              <p>Get notified when a candiadte applies for a job</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someone accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend>Push Notification</legend>
          <p>These aer delivered vis SMS to your phone</p>

          <input
            type="radio"
            name="pushNotification"
            id="pushEveryThing"
            value="Everything"
            onChange={changeHandler}
            checked={formData.pushNotification === "Everything"}
          />
          <label htmlFor="pushEveryThing">Everything</label>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushEmail"
            value="same as email"
            onChange={changeHandler}
            checked={formData.pushNotification === "same as email"}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushNothing"
            value="no push notification"
            onChange={changeHandler}
            checked={formData.pushNotification === "no push notification"}
          />
          <label htmlFor="pushNothing">no push notification</label>
        </fieldset>

        <br />
        <button className="py-2 px-4 rounded-md text-white bg-blue-500 font-bold">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
