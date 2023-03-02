import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import FoodLoadingAnimation from "../../../public/animations/food_loading.json";

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
  noBackshadow?: boolean;
}

export const Loading = ({ children, isLoading, noBackshadow }: Props) => {
  const lottieRef = useRef<
    (HTMLDivElement & { play: () => void; stop: () => void }) | null
  >(null);

  useEffect(() => {
    if (isLoading) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [isLoading]);

  return isLoading ? (
    <div className="relative h-full w-full">
      {children}
      <Lottie
        animationData={FoodLoadingAnimation}
        style={{
          height: "100%",
          background: !noBackshadow ? "rgba(12, 12, 12, 0.5)" : "white",
          position: "absolute",
          top: 0,
          width: "100%",
        }}
        ref={lottieRef}
      ></Lottie>
    </div>
  ) : (
    <>{children}</>
  );
};
