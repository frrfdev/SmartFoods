import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import SuccessAnimation from "../../../public/animations/success.json";

export const Confirm = () => {
  const router = useRouter();

  return (
    <PrivatePage>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-[33%] flex-col items-center justify-center gap-4 text-center">
          <Title>Pedido solicitado com sucesso</Title>

          <p>
            Agora falta pouco informa o estabelecimento via Whatsapp e agilize
            seu atendimento
          </p>

          <Button status="confirm">CONFIRMAR VIA WHATSAPP</Button>

          <Button status="text" onClick={() => router.back()}>
            Voltar
          </Button>
        </div>
        <Lottie
          animationData={SuccessAnimation}
          style={{
            height: "100%",
            background: "transparent",
            position: "absolute",
            top: 0,
            width: "100%",
            pointerEvents: "none",
          }}
          loop={false}
        ></Lottie>
      </div>
    </PrivatePage>
  );
};

export default Confirm;
