import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CLabel,
  CModal,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SignupCard from "../components/SignupCard/SignupCard";
import { ReactComponent as InfoIcon } from "../assets/icons/info-icon.svg";
import { ReactComponent as CreditCardLogo } from "../assets/icons/credit-card-icon.svg";
import { sendCheckout } from "src/api/signup";

const Checkout = () => {
  const [infoShown, setInfoShown] = useState(false);

  const lead = JSON.parse(sessionStorage.getItem("LEAD") || "{}");

  const history = useHistory();
  const [inputs, setInputs] = useState(
    history.location.state
      ? history.location.state
      : {
          name: lead && lead.name ? lead.name : "",
          ccNumber: "",
          ccExpiry: "",
          ccCVV: "",
          cpf: "",
          email: lead.email ? lead.email : "",
        }
  );
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(
      !checkEmpty(
        inputs.name,
        inputs.email,
        inputs.ccNumber,
        inputs.ccExpiry,
        inputs.ccCVV,
        inputs.cpf
      )
    );
  }, [inputs]);

  async function checkout() {
    const { name, ccNumber, ccExpiry, ccCVV, cpf, email } = inputs;

    const body = { name, ccNumber, ccExpiry, ccCVV, cpf, email };
    sendCheckout(body)
      .then((response) => {
        if (response.ok) {
          sessionStorage.removeItem("LEAD");
          history.replace("/letsprofit");
        } else {
          history.push("/error", inputs);
        }
      })
      .catch((err) => history.push("/error"));
  }

  return (
    <>
      <SignupCard lg={4} step={4} ml="auto" mr="0" display={"d-none d-lg-flex"}>
        <div className="px-5 d-flex flex-column">
          <CLabel className="input-label-text mt-3 " htmlFor="name">
            Selecione o seu plano:
          </CLabel>
          <div className="plan-option d-flex flex-column align-items-center">
            <div className="signup-progress-txt">{"plano mensal"}</div>
            <div className="cost">
              <div className="cost-main">{37}</div>
              <div className="cost-decimal">,{"90"}</div>
            </div>
            <div className="txt-uppercase text-center p-4">
              {"investimentos diversos + cursos + entretenimento"}
            </div>
          </div>
          <div className="redirect-text-clr text-center my-5">
            você já é assinante? clique aqui
          </div>
        </div>
      </SignupCard>
      <SignupCard lg={4} ml="0" mr="auto" stepBack>
        <div className="h-100 px-4 px-lg-5 d-flex flex-column">
          <CForm>
            <div className="mb-3 txt-clr-dark d-lg-none">
              <div className="signup-progress-txt">RESUMO DO PEDIDO:</div>
              <div className="separator"></div>
              <div>Assinatura plano mensal</div>
              <div>Pacote - INVPASS </div>
              <div>R$ 37,90 por mês</div>
            </div>
            <CLabel className="input-label-text">Dados de pagamento:</CLabel>
            <CFormGroup>
              <CInput
                className="input-text"
                type="text"
                placeholder="Nome do Cartão de Crédito"
                autoComplete="off"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </CFormGroup>
            <CFormGroup>
              <CInput
                className="input-text"
                type="text"
                placeholder="Número do Cartão de Crédito"
                autoComplete="off"
                value={inputs.ccNumber}
                onChange={(e) =>
                  setInputs({ ...inputs, ccNumber: e.target.value })
                }
              />
            </CFormGroup>
            <CFormGroup>
              <CInput
                className="input-text"
                type="text"
                placeholder="CPF"
                autoComplete="off"
                value={inputs.cpf}
                onChange={(e) => setInputs({ ...inputs, cpf: e.target.value })}
              />
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="6">
                <CInput
                  className="input-text"
                  type="text"
                  placeholder="Validade"
                  autoComplete="off"
                  value={inputs.ccExpiry}
                  onChange={(e) =>
                    setInputs({ ...inputs, ccExpiry: e.target.value })
                  }
                />
              </CCol>
              <CCol xs="6">
                <CInputGroup className="input-text align-items-center">
                  <CInput
                    type="text"
                    placeholder="CVV"
                    autoComplete="off"
                    value={inputs.ccCVV}
                    onChange={(e) =>
                      setInputs({ ...inputs, ccCVV: e.target.value })
                    }
                  />
                  <CInputGroupAppend onClick={() => setInfoShown(true)}>
                    <InfoIcon className="m-3" />
                  </CInputGroupAppend>
                </CInputGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup className="mt-4">
              <CButton
                className="confirm-button"
                disabled={!validated}
                color="primary"
                onClick={checkout}
              >
                Confirmar pagamento
              </CButton>
            </CFormGroup>
          </CForm>
          <div className="redirect-text-clr text-center mt-auto mb-5 d-lg-none">
            você já é assinante? clique aqui
          </div>
        </div>
      </SignupCard>
      <CModal centered show={infoShown} onClose={() => setInfoShown(false)}>
        <div className="p-4 p-lg-5">
          <div className="pl-2">CVV</div>
          <div className="d-flex flex-column align-items-center">
            <div className="separator-dashed w-100 m-2"></div>
            <div className="text-center">
              O código de Segurança do Cartão (CVV) são os últimos três digitos
              impressos na parte de trás do cartão.
            </div>
            <CreditCardLogo />
          </div>
        </div>
      </CModal>
    </>
  );
};

export default Checkout;

const checkEmpty = (...fields) => fields.filter((f) => f === "").length > 0;
