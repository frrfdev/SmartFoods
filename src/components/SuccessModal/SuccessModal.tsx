import Lottie from "lottie-react";
import React from "react";
import SuccessAnimation from "../../../public/animations/default_success.json";

interface Props {
  onEnd?: () => void;
  isVisible?: boolean;
}

export const SuccessModal = ({ onEnd }: Props) => {
  return (
    <Lottie
      animationData={SuccessAnimation}
      style={{
        height: "100%",
        background: "transparent",
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        pointerEvents: "none",
      }}
      loop={false}
      onComplete={onEnd}
    />
  );
};
