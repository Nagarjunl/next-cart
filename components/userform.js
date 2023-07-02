import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/slices/userslice";

const UserForm = () => {
  //   const [name, setName] = useState("");
  //   const [mobileNumber, setMobileNumber] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [city, setCity] = useState("");
  //   const [district, setDistrict] = useState("");
  //   const [pincode, setPincode] = useState("");

  const user = useSelector((state) => state.user.user);

  console.log("user", user);
  console.log("user", user.name);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    console.log("sdfsdf");
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    dispatch(addUser(formJson));
  }

  return (
    <form
      className="reservation-form-select2"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-group">
            <label className="control-label">Name *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              defaultValue={user.name ? `${user.name}` : ""}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-group">
            <label className="control-label">Phone *</label>
            <input
              type="text"
              name="mobilenumber"
              className="form-control"
              required
              defaultValue={user.mobilenumber ? `${user.mobilenumber}` : ""}

              //   onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="form-group">
            <label className="control-label">Address</label>
            <textarea
              type="text"
              name="address"
              className="form-control"
              rows="7"
              cols="20"
              required
              defaultValue={user.address ? `${user.address}` : ""}
              //   onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="form-group">
            <label className="control-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              required
              defaultValue={user.city ? `${user.city}` : ""}
              //   onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="form-group">
            <label className="control-label">District *</label>
            <input
              type="text"
              name="district"
              className="form-control"
              required
              defaultValue={user.district ? `${user.district}` : ""}

              //   onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="form-group">
            <label className="control-label">Pincode</label>
            <input
              type="text"
              name="pincode"
              className="form-control"
              required
              defaultValue={user.pincode ? `${user.pincode}` : ""}

              //   onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="pLace-order">
            <button
              className="btn-send-message disabled"
              type="submit"
              value="Login"
            >
              PLace Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
