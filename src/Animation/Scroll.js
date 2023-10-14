import { useMemo } from "react";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const Scroll = () => {
  const overscrollOptions = useMemo(() => {
    return {
      enable: true,
      effect: "bounce",
      damping: 0.15,
      maxOverscroll: 150,
      glowColor: "#fff",
    };
  }, []);

  const options = useMemo(() => {
    return {
      damping: 0.08,
      plugins: {
        overscroll: { ...overscrollOptions },
      },
    };
  }, [overscrollOptions]);

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const scroll = Scrollbar.init(
      document.querySelector("#scrollbar"),
      options,
    );

    return () => {
      if (Scrollbar) Scrollbar.destroy(scroll);
    };
  }, [options]);

  return null;
};

export default Scroll;
