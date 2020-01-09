import * as React from "react";

const Check = () => {
  const [number, setNumber] = React.useState(0);
  const [random, setRandom] = React.useState(1);

  React.useEffect(() => {
    console.log("Clicked");
  });

  return (
    <div>
      <input
        type="checkbox"
        value={number}
        onClick={() => setNumber(number + 1)}
      />
      <button onClick={() => setRandom(Math.random() * 2)} />
      <p>{random}</p>
    </div>
  );
};

export default Check;
