import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center ">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-orange-400 border-t-transparent"></div>
    </div>
  );
};

export default Loading;
