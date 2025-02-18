import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      {" "}
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Looking for a Driver</h2>
      <div className="flex justify-between flex-col items-center gap-2">
        <img
          className="h-20 "
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">5611/11-A</h3>
              <p className="text-sm text-color-600 -mt-1">
                Shivam Hostel, near Akashwani chowk, Rajkot
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">5611/11-A</h3>
              <p className="text-sm text-color-600 -mt-1">
                Shivam Hostel, near Akashwani chowk, Rajkot
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm text-color-600 -mt-1">Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
