function Field() {
  return (
    <>
      {" "}
      <div
        id="frame"
        className="relative w-full h-full z-10 border-4 border-white"
      >
        <>
          <div
            id="top_left-corner"
            className="absolute w-4 h-4 rounded-br-full border-l-0
     border-t-0 border-r-4 border-b-4 border-white"
          ></div>
          <div
            id="bot_left-corner"
            className="absolute bottom-0 w-4 h-4 rounded-tr-full border-l-0
     border-b-0 border-r-4 border-t-4 border-white"
          ></div>
          <div
            id="top_right-corner"
            className="absolute top-0 right-0 w-4 h-4 rounded-bl-full border-r-0
     border-t-0 border-l-4 border-b-4 border-white"
          ></div>
          <div
            id="bot_right-corner"
            className="absolute bottom-0 right-0 w-4 h-4 rounded-tl-full border-b-0
     border-r-0 border-l-4 border-t-4 border-white"
          ></div>
        </>
        <div
          id="middle-line"
          className="w-1 absolute top-1/2 left-1/2 
           -translate-x-1/2 -translate-y-1/2 h-full bg-white"
        >
          <div
            id="circle"
            className="absolute w-20 h-20 top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
          >
            <div
              id="dot"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white"
            ></div>
          </div>
        </div>
        <>
          <div
            id="area-left"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-48 border-l-0 border-4 border-white py-10 pr-20"
          >
            <div className="border-4 border-white border-l-0 w-full h-full"></div>
            <div className="absolute left-20 -translate-y-1/2 top-1/2 w-2 h-2 rounded-full bg-white "></div>
            <div className="absolute left-32 -translate-y-1/2 border-l-0 rounded-r-full top-1/2 w-5 h-20 border-4 border-white"></div>
          </div>
          <div
            id="area-left"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-48 border-r-0 border-4 border-white py-10 pl-20"
          >
            <div className="border-4 border-white border-r-0 w-full h-full"></div>
            <div className="absolute right-20 -translate-y-1/2 top-1/2 w-2 h-2 rounded-full bg-white "></div>
            <div className="absolute right-32 -translate-y-1/2 border-r-0 rounded-l-full top-1/2 w-5 h-20 border-4 border-white"></div>
          </div>
        </>
      </div>
    </>
  );
}
export { Field };
