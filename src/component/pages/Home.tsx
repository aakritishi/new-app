import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import img from "../../assets/asking_out.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMoved, setIsMoved] = useState(false);

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 150);
    setPosition({ top: randomTop, left: randomLeft });
    setIsMoved(true);
  };

  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center">
      <h1 className="mb-6 text-xl font-normal text-blue-700">
        Do you wanna go out with me???
      </h1>
      <img src={img} alt="img" className="h-96 mb-5" />
      <div className="flex justify-center items-center gap-10">
        <NavLink to="/success">
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 flex rounded items-center gap-2">
            <span>Yes</span>
            <TiTick />
          </button>
        </NavLink>

        <div className="relative w-32 h-12">
          <button
            onMouseEnter={moveButton}
            onClick={moveButton}
            style={
              isMoved
                ? {
                    position: "absolute",
                    top: `${position.top}%`,
                    left: `${position.left}%`,
                  }
                : { position: "absolute", top: 5, left: 0 }
            }
            className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 flex rounded items-center gap-2"
          >
            <span>No</span>
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
