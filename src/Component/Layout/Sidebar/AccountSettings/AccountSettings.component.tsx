import React from "react";

const AccountSettingsComponent = () => (
  <div className="absolute mt-8 pin flex items-center">
    <div className="absolute pin bg-black opacity-75 z-10 animated fadeIn" />

    <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
      <div className="shadow-lg bg-white rounded-lg p-8 animated fadeInUp">
        <div className="flex justify-end mb-6">
          <button>
            <span className="mr-2">Close</span>
            <span>
              <i className="fa fa-times" />
            </span>
          </button>
        </div>

        <h1 className="text-center text-2xl text-green-dark">Login</h1>
        <div>Test</div>
      </div>
    </div>
  </div>
);

export { AccountSettingsComponent };
