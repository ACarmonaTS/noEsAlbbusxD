import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState<number>(0);

  const onResize = () => {
    const widthMove = window.innerWidth;
    setWidth(widthMove);
  };

  useEffect(() => {
    onResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};

export default useScreenSize;
