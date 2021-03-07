import { CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as ReturnIcon } from "../../assets/icons/return-icon.svg";

const SignupCard = ({ children, lg, step, stepBack, ml, mr, display }) => {
  return (
    <CCol
      lg={lg ?? 5}
      className={`my-0 my-lg-auto ml-lg-${ml ?? "auto"} mr-lg-${mr ?? "auto"} ${
        display ?? "d-flex"
      }`}
    >
      <CCard className="w-100">
        <CCardHeader className="my-5 my-lg-3">
          <div className="w-100">
            {stepBack && <ReturnIcon className="position-absolute d-lg-none" />}
            <LogoIcon className="w-100" />
          </div>
          {step && (
            <div className="signup-progress-txt mt-3 text-center">
              PASSO {step} DE 5
            </div>
          )}
        </CCardHeader>
        <CCardBody>{children}</CCardBody>
      </CCard>
    </CCol>
  );
};

export default SignupCard;
