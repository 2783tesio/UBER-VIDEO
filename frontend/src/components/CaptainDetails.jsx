import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://th.bing.com/th/id/R.b842e733d82d0f6ad093c00c747f4580?rik=XDjtb03CRD9TGw&riu=http%3a%2f%2fmydotcomrade.com%2fwp-content%2fuploads%2f1970%2f01%2fKatharina_Andresen.jpg&ehk=2e1eHwB4hg0sdNpC69%2b2nCzjBwYbFFppKToaKIovpBk%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          ></img>
          <h4 className="text-lg font-medium">Indira Gandhi</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">₹289.3</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center ">
          <i className=" text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg fon">10.2</h5>
          <p className="text-sm text-green-600">Hours Online</p>
        </div>
        <div className="text-center ">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg fon">10.2</h5>
          <p className="text-sm text-green-600">Hours Online</p>
        </div>
        <div className="text-center ">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg fon">10.2</h5>
          <p className="text-sm text-green-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
