import React from "react";
import { CButton, CLabel, CFormGroup } from "@coreui/react";
import SignupCard from "../components/SignupCard/SignupCard";
import { ReactComponent as WrongIcon } from "../assets/icons/wrong-icon.svg";
import { useHistory } from "react-router-dom";

const Confirmation = () => {

  const history = useHistory();

  return (
    <SignupCard step={5}>
      <CFormGroup className="d-flex flex-column align-items-center my-5 mx-4">
        <WrongIcon />
        <CLabel className="input-label-text text-center w-100 my-4">
          Ops... algo deu errado Lorem ipsum dolo
        </CLabel>
        <CButton className="confirm-button" color="primary" onClick={history.goBack}>
            Voltar
        </CButton>
      </CFormGroup>
    </SignupCard>
  );
};

export default Confirmation;
