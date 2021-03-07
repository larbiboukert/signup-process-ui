import React from "react";
import { CButton } from "@coreui/react";
import { useHistory } from "react-router-dom";
import SignupCard from "../components/SignupCard/SignupCard";

const Terms = () => {
  const history = useHistory();

  return (
    <SignupCard step={2} stepBack>
      <div className="h-100 d-flex flex-column">
        <div className="mx-4 terms">
          <div className="my-2">
            Contrato de assinatura - Inversa - Brasil - 2020
          </div>
          <div className="scroll">{terms}</div>
        </div>
        <div className="mt-auto">
          <div className="p-4 p-lg-5 accept-div">
            {/* <small className="d-block my-2 text-center txt-clr-white">
              Ao clicar em “Concordar e Continuar”, você confirma que leu o
              nosso Contrato de Assinatura na íntegra e concorda com ele.
            </small> */}
            <CButton
              className="confirm-button"
              disabled={false}
              color="primary"
              onClick={history.goBack}
            >
              Voltar
            </CButton>
          </div>
        </div>
      </div>
    </SignupCard>
  );
};

export default Terms;

const terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet, Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Aenean
eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean eleifend.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean eleifend. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet,
sectetur adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Aenean eleifend.Lorem ipsum dolor
sit amet, consectetur adipiscing elit. Aenean eleifend. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Aenean eleifend.Lorem
ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Aenean eleifend.Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Aenean eleifend. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Aenean eleifend.Lorem
ipsum dolor sit amet,`;
