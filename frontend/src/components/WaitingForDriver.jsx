import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <div>
        {" "}
        <h5
          className="p-1 text-center absolute top-0 w-[93%]"
          onClick={() => {
            props.setWaitingForDriver(false);
          }}
        >
          <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
        </h5>
        <div className="flex justify-between items-center gap-2">
          <img
            className="h-12 "
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right ">
            <h2 className="text-lg font-medium">Akash</h2>
            <h4 className=" text-xl font-semibold -mt-1 -mb-1">GJ05 EW 4027</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki</p>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
