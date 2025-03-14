import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
      <div className="flex justify-between items-center p-4 border-2 border-yellow-400 rounded-lg mt-4">
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
          <Link
            to={"/captain-home"}
            className="w-full flex justify-center  bg-green-600 text-white text-lg font-semibold p-3 rounded-lg mt-5"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
