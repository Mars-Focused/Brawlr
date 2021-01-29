import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

const AddLikedGame = (props) => {
  const [game, setGame] = useState("");

  async function sendInfo(e) {
    if (e) e.preventDefault();
    const res = await axios.post("/api/add_game", {
      game: game,
    });
    if (res.data) {
      alert(`${game} has been added!`);
    }
  }

  // console.log("e:", );
  // const [newGame, setNewGame] = useState;
  return (
    <div>
      <input
        placeholder="AddLikedGame"
        className="CIInput"
        onChange={(e) => setGame(e.target.value)}
      />
      <button onClick={sendInfo}>Add</button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    username: reduxState.user.user.username,
    darkMode: reduxState.darkMode.darkMode,
  };
}

export default connect(mapStateToProps, {})(AddLikedGame);
