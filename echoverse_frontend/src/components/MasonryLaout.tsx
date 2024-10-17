import Masonry from "react-masonry-css";
import Pin from "./Pin";
import { Pin as PinType } from "@/types";
import { useEffect, useState } from "react";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }: { pins: PinType[] }) => {
  let [pinsArray, setPinsArray] = useState<PinType[]>([]);
  const handleDeletePin = (id: string) => {
    setPinsArray((prevPins: PinType[]) =>
      prevPins.filter((pin) => pin._id !== id)
    );
  };

  useEffect(() => {
    setPinsArray(pins);
  }, [pins]);

  return (
    <Masonry
      className="flex animate-slide-fwd"
      breakpointCols={breakpointColumnsObj}
    >
      {pinsArray?.map((pin: PinType) => (
        <div className="w-max" key={pin._id}>
          <Pin pin={pin} onDelete={handleDeletePin} />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
