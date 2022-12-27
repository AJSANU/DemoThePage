/*
 * This demo shows how to use `reactour` in combination with `react-router-dom@6`
 * and automatic switching of router from within the tour.
 *
 * we use `reactour`'s `step` and `setCurrentStep` props to accomplish this. it is
 * necessary to do it this way, as the rerender of the application has to be taken
 * into account.
 *
 * @author MikO <miko@massivedynamic.eu>
 */
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import { TourProvider } from "@reactour/tour";

import Header from "./components/Header";
import Home from "./components/Home";
import Example from "./components/Example";

const steps = [
  {
    selector: "[data-tour='test123']",
    content: (
      <p>
        Click here to see the detail <code>content</code> about Oracle Cloud Infrastructure (OCI)
      </p>
    ),
    highlightedSelectors: [".testR"],
    //mutationObservables selectors passed to this array will trigger a rerender of the highlighted area after changes to selected DOM nodes
    mutationObservables: [".tests"]
  },
  {
    selector: "[data-tour='sub-heading']",
    content: (
      <p>
        This section shows the <code>benifits</code> of using Oracle Cloud Infrastructure (OCI)
      </p>
    )
  },
  {
    selector: "[data-tour='heading123']",
    content: (
      <p>
        This section shows the <code>Key features</code> of Oracle Cloud Infrastructure (OCI)
      </p>
    )
  },
  {
    selector: "[data-tour='demo-button']",
    content: (
      <p>
        Click here to get a  <code>tour</code> of Oracle Cloud Infrastructure (OCI) content page
      </p>
    )
  },
  {
    selector: "[data-tour='first-step']",
    content: (
      <p>
        This is where <code> OCI content tour</code> page starts
      </p>
    )
  }
];

const App = () => {
  const redirect = useNavigate();
  const [step, setStep] = useState(0);

  const setCurrentStep = (step) => {
    switch (step) {
      case 0:
        redirect("/", true);
        break;
      case 1:
        redirect("/Example", true);
        break;
      default:
        break;
    }
    setStep(step);
  };

  const [test, setTest] = useState(false);

  const callback = (step) => {
    if (step === 0)
      setTimeout(() => {
        setTest(true);
      }, 1000);
    return test;
  };

  return (
    <TourProvider
      steps={steps}
      currentStep={step}
      setCurrentStep={setCurrentStep}
      showPrevNextButtons={callback(step)}
    >
      <section className="container">
        <Header setStep={setStep} />
        <main className="mt-5">
          <Routes>
            <Route end path="/" element={<Home />} />
            <Route end path="/Example" element={<Example />} />
          </Routes>
        </main>
      </section>
    </TourProvider>
  );
};

export default App;
