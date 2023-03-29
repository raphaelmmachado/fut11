function Field() {
  return (
    <>
      {" "}
      <div
        id="frame"
        className="relative w-full h-full border-4
         border-white"
      >
        <>
          <div
            id="top_left-corner"
            className="absolute w-2 h-2 rounded-br-full border-l-0
     border-t-0 border-r-4 border-b-4 border-white"
          ></div>
          <div
            id="bot_left-corner"
            className="absolute bottom-0 w-2 h-2  rounded-tr-full border-l-0
     border-b-0 border-r-4 border-t-4 border-white"
          ></div>
          <div
            id="top_right-corner"
            className="absolute top-0 right-0 w-2 h-2  rounded-bl-full border-r-0
     border-t-0 border-l-4 border-b-4 border-white"
          ></div>
          <div
            id="bot_right-corner"
            className="absolute bottom-0 right-0 w-2 h-2  rounded-tl-full border-b-0
     border-r-0 border-l-4 border-t-4 border-white"
          ></div>
        </>
        <div
          id="middle-line"
          className="h-1 absolute top-1/2 left-1/2 
           -translate-x-1/2 -translate-y-1/2 w-full bg-white"
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
            id="area-top"
            className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-44 border-t-0 border-4 border-white px-10 pb-14"
          >
            <div className="border-4 border-white border-t-0 h-full w-full"></div>
            <div
              id="penalty-mark"
              className="absolute top-14 -translate-x-1/2 left-1/2 w-2 h-2 rounded-full bg-white "
            ></div>
            <div
              id="penalty-max-range"
              className="absolute top-24 -translate-x-1/2 border-t-0 rounded-b-full left-1/2 h-5 w-11 border-4 border-white"
            ></div>
          </div>
          <div
            id="area-bottom"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-44 border-b-0 border-4 border-white px-10 pt-14"
          >
            <div className="border-4 border-white border-b-0 h-full w-full"></div>
            <div
              id="penalty-mark"
              className="absolute bottom-14 -translate-x-1/2 left-1/2 w-2 h-2 rounded-full bg-white "
            ></div>
            <div
              id="penalty-max-range"
              className="absolute bottom-24 -translate-x-1/2 border-b-0 rounded-t-full left-1/2 h-5 w-11 border-4 border-white"
            ></div>
          </div>
        </>
      </div>
    </>
  );
}
export { Field };
