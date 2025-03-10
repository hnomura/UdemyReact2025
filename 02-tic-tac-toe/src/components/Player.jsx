import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
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
    if (isEditing) {
      // notify latset playerName to parent component when editing ends
      onNameChange(symbol, playerName);
    }
    setIsEditing((prev) => !prev);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {ediablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editBtnCaption}</button>;
    </li>
  );
}
