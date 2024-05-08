import React from "react";


const Navbaar = () => {
  return (
    <div>
      <div className="h-20 flex items-center w-full px-3 bg-white shadow-md">
        <div className="flex items-center justify-start">
          <img
            className="w-14 h-14 rounded-full bg-white"
            src="https://th.bing.com/th/id/OIP.NEGLTvFMH1Y99r66zk0JKAHaHa?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h1 className="text-3xl text-gray-600">chrome</h1>
        </div>


        <div className="flex items-center justify-center text-lg font-medium gap-8 ml-12 text-gray-500">
          <p className="hover:text-black cursor-pointer transition-colors duration-300">
            AI Innovation
          </p>
          <p className="hover:text-black cursor-pointer transition-colors duration-300">
            Features
          </p>
          <p className="hover:text-black cursor-pointer transition-colors duration-300">
            Safety
          </p>
          <p className="hover:text-black cursor-pointer transition-colors duration-300">
            By Google
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Navbaar;