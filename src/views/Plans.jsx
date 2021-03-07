import React, { useState, useEffect } from "react";
import {
  CButton,
  CCarousel,
  CCarouselInner,
  CCarouselItem,
  CLabel,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import SignupCard from "../components/SignupCard/SignupCard";
import { ReactComponent as EclipseOnIcon } from "../assets/icons/eclipse-on-icon.svg";
import { ReactComponent as EclipseOffIcon } from "../assets/icons/eclipse-off-icon.svg";
import { fetchPlans } from "src/api/signup";

const Plans = () => {
  const history = useHistory();

  const [plans, setPlans] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchPlans()
      .then((r) => setPlans(r))
      .catch((e) => setPlans([]));
  }, []);

  function selectPlan(id) {
    console.log("selected plan", id);
    history.push("/checkout");
  }

  return (
    <SignupCard step={3} stepBack>
      <div className="h-100 d-flex flex-column">
        <CLabel className="input-label-text pl-4 mt-5" htmlFor="name">
          Selecione o seu plano:
        </CLabel>
        <CCarousel activeIndex={activeIndex} animate>
          {[
            <CCarouselInner key="carouselInner" className="px-4 py-3">
              {plans.map((plan, index) => (
                <CCarouselItem key={index} className="px-1">
                  <div className="plan-option d-flex flex-column align-items-center">
                    <div className="signup-progress-txt">{plan.title}</div>
                    <div className="cost">
                      <div className="cost-main">
                        {`${plan.cost}`.split(".")[0]}
                      </div>
                      <div className="cost-decimal">
                        ,
                        {`${plan.cost}`.split(".")[1]
                          ? `${`${plan.cost}`.split(".")[1]}0`.substr(0, 2)
                          : "00"}
                      </div>
                    </div>
                    <div className="txt-uppercase text-center px-4">
                      {plan.descriptions}
                    </div>
                    <CButton
                      className="confirm-button mt-2"
                      disabled={false}
                      color="primary"
                      onClick={() => selectPlan(plan.id)}
                    >
                      Escolher plano
                    </CButton>
                  </div>
                </CCarouselItem>
              ))}
            </CCarouselInner>,
          ]}
        </CCarousel>
        <div className="d-flex justify-content-center mb-4">
          {plans.map((plan, index) =>
            activeIndex === index ? (
              <EclipseOnIcon
                key={index}
                className="mr-1"
                onClick={() => setActiveIndex(index)}
              />
            ) : (
              <EclipseOffIcon
                key={index}
                className="mr-1"
                onClick={() => setActiveIndex(index)}
              />
            )
          )}
        </div>
        <div className="redirect-text-clr text-center mb-5 mt-auto">
          se você já é assinante?{" "}
          <a href="https://go.invtech.dev/eNh4">clique aqui</a>
        </div>
      </div>
    </SignupCard>
  );
};

export default Plans;
