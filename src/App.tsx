import React, { JSXElementConstructor, ReactElement } from "react";

const styles = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface IAppProps {
  children?: React.FC;
}

function App(props: IAppProps) {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsa
        ipsum laborum numquam ratione sequi? Cum distinctio facere illum in iure
        modi, nesciunt obcaecati provident quae quaerat quidem tempore totam.
      </h1>
      <div>text</div>
      <div>text</div>
    </div>
  );
}
export default App;
