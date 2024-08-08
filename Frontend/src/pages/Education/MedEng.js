import { useState } from "react";
import Form2 from "../../ui/form2";
import apiCall from "../../apiCall";

function MedEng() {
  const [stateA, SetStateA] = useState("");
  const [stateB, SetStateB] = useState("");
  const [stateC, SetStateC] = useState("");
  const [stateD, SetStateD] = useState("");
  const [stateE, SetStateE] = useState("");
  const [stateF, SetStateF] = useState("");
  const [stateG, SetStateG] = useState("");

  function handleSubmit() {
    const newData = {
      id: stateA,
      name: stateB,
      course: stateC,
      courseId: stateD,
      city: stateE,
      state: stateF,
      country: stateG,
    };

    apiCall(
      "http://127.0.0.1:8000/api/v1/education/medeng",
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
      <Form2
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

export default MedEng;
