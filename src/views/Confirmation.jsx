import React from "react";
import { CButton } from "@coreui/react";
import SignupCard from "../components/SignupCard/SignupCard";
import { ReactComponent as OkIcon } from "../assets/icons/ok-icon.svg";

const Confirmation = () => {
  return (
    <SignupCard step={5}>
      <div className="d-flex flex-column align-items-center my-5 mx-4">
        <OkIcon />
        <div className="input-label-text text-center w-100 my-4">
          Assinatura realizada com sucesso
        </div>
        <a href="https://go.invtech.dev/eNh4">
          <CButton className="confirm-button" color="primary">
            Começar agora
          </CButton>
        </a>
      </div>
    </SignupCard>
  );
};

export default Confirmation;
