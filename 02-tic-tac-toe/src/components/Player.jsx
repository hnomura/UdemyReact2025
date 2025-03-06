import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let ediablePlayerName = <span className="player-name">{playerName}</span>;
  let editBtnCaption = "Edit";
  if (isEditing) {
    ediablePlayerName = (
      <input
        required
        type="text"
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    editBtnCaption = "Save";
  }

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {ediablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editBtnCaption}</button>;
    </li>
  );
}
