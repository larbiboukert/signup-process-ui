import {
  CButton,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CLink,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { sendLead } from "src/api/signup";
import SignupCard from "../components/SignupCard/SignupCard";

/*eslint no-control-regex: "off"*/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const Signup = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({ name: "", email: "", accept: false });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(
      inputs.accept &&
        inputs.name !== "" &&
        inputs.email !== "" &&
        emailRegex.test(inputs.email)
    );
  }, [inputs]);

  async function startSignup() {
    // const body = {
    //   name: inputs.name,
    //   email: inputs.email,
    //   accept: inputs.accept,
    // };
    // const lead = await sendLead(body);
    sessionStorage.setItem("LEAD", JSON.stringify("lead" || "{}"));

    history.replace("/plans");
  }

  return (
    <SignupCard step={1}>
      <CForm className="px-4 px-md-5 d-flex flex-column h-100">
        <CFormGroup>
          <CLabel className="input-label-text" htmlFor="name">
            Digite seu nome
          </CLabel>
          <CInput
            className="input-text"
            type="text"
            id="name"
            placeholder="Insira seu nome"
            autoComplete="off"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </CFormGroup>
        <CFormGroup>
          <CLabel className="input-label-text" htmlFor="email">
            Digite seu email
          </CLabel>
          <CInput
            className="input-text"
            type="email"
            id="email"
            placeholder="Insira seu e-mail"
            autoComplete="off"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </CFormGroup>
        <CFormGroup className="d-flex px-2">
          <input
            className="input-checkbox mr-2 mt-1"
            type="checkbox"
            id="accept-checkbox"
            onChange={(e) => setInputs({ ...inputs, accept: e.target.checked })}
          />
          <small htmlFor="accept-checkbox">
            Ao aceitar os termos você concorda em receber newsleters,
            informativos e outros produtos da INV e de seus parceiros, sendo
            possível remover seu cadastro a qualquer tempo. <CLink to="/terms">Clique
            aqui</CLink> para ler a política de
            privacidade.
          </small>
        </CFormGroup>
        <CFormGroup>
          <CButton
            className="confirm-button"
            disabled={!validated}
            color="primary"
            onClick={startSignup}
          >
            Iniciar cadastro
          </CButton>
        </CFormGroup>
        <div className="redirect-text-clr text-center mt-auto mb-5 my-lg-4">
          se você já é assinante? <a href="https://go.invtech.dev/eNh4">clique aqui</a>
        </div>
      </CForm>
    </SignupCard>
  );
};

export default Signup;

