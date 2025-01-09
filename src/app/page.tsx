import Image from "next/image";

export default function Home() {
  const [status, setStatus] = useState({
    sheets: false,
    beams: false,
    bolts: false,
    frames: false,
  });

  const handleChange = (key) => {
    setStatus((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] };

      // Logic to update dependent statuses
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

  const getBackgroundColor = (key) => (status[key] ? "transparent" : "red");

  return (
    <div>
      <h3>Control Panel</h3>
      <div>
        <input
          type="checkbox"
          id="sheets-status"
          onChange={() => handleChange("sheets")}
          checked={status.sheets}
        />
        <span
          id="sheets-station"
          style={{ backgroundColor: getBackgroundColor("sheets") }}
        >
          SHEETS
        </span>
      </div>
      <div>
        <input
          type="checkbox"
          id="beams-status"
          onChange={() => handleChange("beams")}
          checked={status.beams}
        />
        <span
          id="beams-station"
          style={{ backgroundColor: getBackgroundColor("beams") }}
        >
          BEAMS
        </span>
      </div>
      <div>
        <input
          type="checkbox"
          id="bolts-status"
          onChange={() => handleChange("bolts")}
          checked={status.bolts}
        />
        <span
          id="bolts-station"
          style={{ backgroundColor: getBackgroundColor("bolts") }}
        >
          BOLTS
        </span>
      </div>
      <div>
        <input
          type="checkbox"
          id="frames-status"
          onChange={() => handleChange("frames")}
          checked={status.frames}
        />
        <span
          id="frames-station"
          style={{ backgroundColor: getBackgroundColor("frames") }}
        >
          FRAMES
        </span>
      </div>
    </div>
  );
}
