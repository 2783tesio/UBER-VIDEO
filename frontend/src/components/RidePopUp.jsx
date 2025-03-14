import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>
      <div className="flex justify-between items-center p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://th.bing.com/th/id/OIP.0B5bjYcmgDBQmKSj5WYfmwHaKn?pid=ImgDet&w=184&h=263&c=7&dpr=1.3"
            alt=""
          />
          <h2 className="text-xl font-medium">Bikash Behera</h2>
        </div>
        <h2 className="text-lg font-semibold">2.2km</h2>
      </div>
      <div className="flex justify-between flex-col items-center gap-2">
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
        <div className="mt-6 w-full">
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className="w-full bg-green-600 text-white font-semibold p-3 mt-1 rounded-lg "
          >
            Accept
          </button>
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="w-full flex justify-center  bg-gray-300 text-gray-700  font-semibold p-3 mt-3 rounded-lg "
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
