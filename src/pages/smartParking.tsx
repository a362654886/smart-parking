import React, { FC, useState } from "react";
import { StyledElement } from "./style";

type StatusKeys = "sheets" | "beams" | "bolts" | "frames";

type Element = {
  name: string;
};

const Home: FC = () => {
  const Elements: Element[] = [
    { name: "sheets" },
    { name: "beams" },
    { name: "bolts" },
    { name: "frames" },
  ];

  const [status, setStatus] = useState<Record<StatusKeys, boolean>>({
    sheets: false,
    beams: false,
    bolts: false,
    frames: false,
  });

  const handleChange = (key: string) => {
    setStatus((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key as StatusKeys] };

      if (!newState.sheets) {
        newState.beams = false;
        newState.frames = false;
      }
      if (!newState.bolts || !newState.beams) {
        newState.frames = false;
      }

      return newState;
    });
  };

  const getBackgroundColor = (key: StatusKeys) =>
    status[key] ? "transparent" : "red";

  return (
    <div>
      <h3>Control Panel</h3>
      {Elements.map((i: Element, index: number) => {
        return (
          <StyledElement key={index} onClick={() => handleChange(i.name)}>
            <input
              type="checkbox"
              id={`${i.name}-status`}
              checked={status[i.name as StatusKeys]}
            />
            <span
              id={`${i.name}-station`}
              style={{
                backgroundColor: getBackgroundColor(i.name as StatusKeys),
              }}
            >
              {i.name.toLocaleUpperCase()}
            </span>
          </StyledElement>
        );
      })}
    </div>
  );
};

export default Home;
