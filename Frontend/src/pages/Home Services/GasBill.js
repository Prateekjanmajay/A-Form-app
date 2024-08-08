import { useState } from "react";
import Form1 from "../../ui/form1";
import apiCall from "../../apiCall";

function GasBill() {
  const [stateA, SetStateA] = useState("");
  const [stateB, SetStateB] = useState("");
  const [stateC, SetStateC] = useState("");
  const [stateD, SetStateD] = useState("");
  const [stateE, SetStateE] = useState("");
  const [stateF, SetStateF] = useState("");
  const [stateG, SetStateG] = useState("");

  function handleSubmit() {
    const newData = {
      accountId: stateA,
      accountName: stateB,
      address: stateC,
      phone: stateD,
      state: stateE,
      country: stateF,
      totalBill: stateG,
    };

    apiCall(
      "http://127.0.0.1:8000/api/v1/homeservices/gasbill",
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
      <Form1
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

export default GasBill;
