import { useState } from "react";
import apiCall from "../../apiCall";

function Contact() {
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
      email: stateB,
      phone: stateC,
      address: stateD,
      city: stateE,
      state: stateF,
      country: stateG,
    };

    apiCall(
      "http://127.0.0.1:8000/api/v1/contactus/contact",
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
    <form onSubmit={handleSubmit} className="form">
      <label>
        Name :
        <input
          className="input"
          type="text"
          value={stateA}
          onChange={(e) => SetStateA(e.target.value)}
        />
      </label>
      <label>
        Email :
        <input
          className="input"
          type="text"
          value={stateB}
          onChange={(e) => SetStateB(e.target.value)}
        />
      </label>
      <label>
        Phone :
        <input
          className="input"
          type="text"
          value={stateC}
          onChange={(e) => SetStateC(e.target.value)}
        />
      </label>
      <label>
        Address :
        <input
          className="input"
          type="text"
          value={stateD}
          onChange={(e) => SetStateD(e.target.value)}
        />
      </label>
      <label>
        City :
        <input
          className="input"
          type="text"
          value={stateE}
          onChange={(e) => SetStateE(e.target.value)}
        />
      </label>
      <label>
        State :
        <input
          className="input"
          type="text"
          value={stateF}
          onChange={(e) => SetStateF(e.target.value)}
        />
      </label>
      <label>
        Country :
        <input
          className="input"
          type="text"
          value={stateG}
          onChange={(e) => SetStateG(e.target.value)}
        />
      </label>

      <input type="submit" className="button"></input>
    </form>
  );
}

export default Contact;
