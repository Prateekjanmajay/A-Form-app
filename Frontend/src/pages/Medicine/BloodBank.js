import { useState } from "react";
import Form3 from "../../ui/form3";
import apiCall from "../../apiCall";

function BloodBank() {
  const [stateA, SetStateA] = useState("");
  const [stateB, SetStateB] = useState("");
  const [stateC, SetStateC] = useState("");
  const [stateD, SetStateD] = useState("");
  const [stateE, SetStateE] = useState("");
  const [stateF, SetStateF] = useState("");
  const [stateG, SetStateG] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      name: stateA,
      id: stateB,
      hospitalName: stateC,
      patientName: stateD,
      patientId: stateE,
      state: stateF,
      country: stateG,
    };

    apiCall("http://bloodbank", "POST", newData).then((n) => {
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

export default BloodBank;
