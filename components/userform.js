import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/slices/userslice";
import { useRouter } from "next/navigation";

const UserForm = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    dispatch(addUser(formJson));
    router.push("/printpreview");
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
              defaultValue={user?.name ? `${user.name}` : ""}
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
              defaultValue={user?.mobilenumber ? `${user.mobilenumber}` : ""}
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
              defaultValue={user?.address ? `${user.address}` : ""}
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
              defaultValue={user?.city ? `${user.city}` : ""}
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
              defaultValue={user?.district ? `${user.district}` : ""}
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
              defaultValue={user?.pincode ? `${user.pincode}` : ""}
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
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
