import React from "react";

const LocationSearchPanel = (props) => {
  //smaple array for location
  const locations = [
    "Shivam Hostel, near Akashwani chowk, Rajkot",
    "Akash Hostel, near Angi chowk, Rajkot",
    "Mahadev Hostel, near Shewta chowk, Rajkot",
    "Aryan Hostel, near Rangi chowk, Rajkot",
  ];

  return (
    <div>
      {locations.map((location, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex border-2 border-gray-50 active:border-black  p-3 rounded-xl items-center justify-start gap-4 my-2"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full ">
              <i className="ri-map-pin-line text-xl"></i>
            </h2>
            <h4 className="font-medium" key={location}>
              {location}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
