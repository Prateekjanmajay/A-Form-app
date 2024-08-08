import "../index.css";

function Form3({
  stateA,
  SetStateA,
  stateB,
  SetStateB,
  stateC,
  SetStateC,
  stateD,
  SetStateD,
  stateE,
  SetStateE,
  stateF,
  SetStateF,
  stateG,
  SetStateG,
  handleSubmit,
}) {
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
        ID :
        <input
          className="input"
          type="text"
          value={stateB}
          onChange={(e) => SetStateB(e.target.value)}
        />
      </label>
      <label>
        Hospital Name :
        <input
          className="input"
          type="text"
          value={stateC}
          onChange={(e) => SetStateC(e.target.value)}
        />
      </label>
      <label>
        Patient Name :
        <input
          className="input"
          type="text"
          value={stateD}
          onChange={(e) => SetStateD(e.target.value)}
        />
      </label>
      <label>
        Patient ID :
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

export default Form3;
