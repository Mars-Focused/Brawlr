import React, { useState } from "react";
import { connect } from "react-redux";

const AddLikedGame = () => {
  // const [newGame, setNewGame] = useState;
  return (
    <div>
      <input
        placeholder="AddLikedGame"
        className="CIInput"
        // onChange={(e) => setNewGame({ input: e.target.value })}
      />
      <button>Add</button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, {})(AddLikedGame);
