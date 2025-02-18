import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      {" "}
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          //   props.setVehiclePanel(false);
        }}
        className="flex border-2 active:border-black border-white mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber"
          className="h-13"
        />
        <div className="w-1/2 -ml-2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>{" "}
          </h4>
          <h4 className="font-medium text-sm">2 min away</h4>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.50</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          //   props.setVehiclePanel(false);
        }}
        className="flex  border-2 active:border-black border-white mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="uber"
          className="h-13"
        />
        <div className="w-1/2 -ml-2">
          <h4 className="font-medium text-base">
            UberMoto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>{" "}
          </h4>
          <h4 className="font-medium text-sm">3 min away</h4>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.56</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          //   props.setVehiclePanel(false);
        }}
        className="flex  border-2 active:border-black border-white mb-2 rounded-xl w-full items-center justify-between p-3"
      >
        <img
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt="uber"
          className="h-13"
        />
        <div className="w-1/2 -ml-2">
          <h4 className="font-medium text-base">
            UberMoto{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>{" "}
          </h4>
          <h4 className="font-medium text-sm">3 min away</h4>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.56</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
