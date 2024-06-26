import logo from "./logo.svg";
import "./App.css";
import "./Message.css";

function App() {
  return (
    <div className="App">
      <Message tema="GGG" body="Tttttttdshjdsak" />
      <Message
        tema="TTT"
        body="Tttttttdshjdsaksackacksklacklsancklasncklsnclk"
      />
    </div>
  );
}
function Message(props) {
  return (
    <div>
      <h2>{props.tema}:</h2>
      <p>{props.body}</p>
    </div>
  );
}

//export default Message;
export default App;
