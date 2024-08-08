import { useState } from "react";
import Form3 from "../../ui/form3";
import apiCall from "../../apiCall";

function TestReport() {
  const [stateA, SetStateA] = useState("");
  const [stateB, SetStateB] = useState("");
  const [stateC, SetStateC] = useState("");
  const [stateD, SetStateD] = useState("");
  const [stateE, SetStateE] = useState("");
  const [stateF, SetStateF] = useState("");
  const [stateG, SetStateG] = useState("");

  function handleSubmit() {
    const newData = {
      name: stateA,
      id: stateB,
      hospitalName: stateC,
      patientName: stateD,
      patientId: stateE,
      state: stateF,
      country: stateG,
    };

    apiCall(
      "http://127.0.0.1:8000/api/v1/medicine/testreport",
      "POST",
      newData
    ).then((n) => {
      SetStateA("");
      SetStateB("");
      SetStateC("");
      SetStateD("");
      SetStateE("");
      SetStateF("");
      SetStateG("");
    });

    console.log(newData);
  }

  return (
    <>
      <Form3
        stateA={stateA}
        SetStateA={SetStateA}
        stateB={stateB}
        SetStateB={SetStateB}
        stateC={stateC}
        SetStateC={SetStateC}
        stateD={stateD}
        SetStateD={SetStateD}
        stateE={stateE}
        SetStateE={SetStateE}
        stateF={stateF}
        SetStateF={SetStateF}
        stateG={stateG}
        SetStateG={SetStateG}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default TestReport;
