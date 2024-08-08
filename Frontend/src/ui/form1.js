import "../index.css";

function Form1({
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
        Account ID :
        <input
          className="input"
          type="text"
          value={stateA}
          onChange={(e) => SetStateA(e.target.value)}
        />
      </label>
      <label>
        Account Name :
        <input
          className="input"
          type="text"
          value={stateB}
          onChange={(e) => SetStateB(e.target.value)}
        />
      </label>
      <label>
        Address :
        <input
          className="input"
          type="text"
          value={stateC}
          onChange={(e) => SetStateC(e.target.value)}
        />
      </label>
      <label>
        Phone :
        <input
          className="input"
          type="text"
          value={stateD}
          onChange={(e) => SetStateD(e.target.value)}
        />
      </label>
      <label>
        State :
        <input
          className="input"
          type="text"
          value={stateE}
          onChange={(e) => SetStateE(e.target.value)}
        />
      </label>
      <label>
        Country :
        <input
          className="input"
          type="text"
          value={stateF}
          onChange={(e) => SetStateF(e.target.value)}
        />
      </label>
      <label>
        Total Bill :
        <input
          className="input"
          type="text"
          value={stateG}
          onChange={(e) => SetStateG(e.target.value)}
        />
      </label>

      <input type="submit" className="button" onClick={handleSubmit}></input>
    </form>
  );
}

export default Form1;
