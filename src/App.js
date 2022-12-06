import "./styles.css";
import Drop from "./dropdown";
// import Input from "./input";

import Header from "./header"
// import Button from "./button";

export default function App() {
  return (
    <div className="App">
    <Header />
      <h1>Hello World</h1><br />
      <h2>Here you can find the free couses from youtube and websites</h2><br />
      <Drop />
      {/* <Input />  */}
      <br />
      {/* <Button /> */}

    </div>
    
  );
}
