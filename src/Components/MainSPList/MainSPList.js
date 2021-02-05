import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SPBox from "../SPBox/SPBox";
import { changeRecSPArr } from "../../Redux/spReducer";
import { toggleDarkMode } from "../../Redux/darkModeReducer";

const MainSPList = (props) => {
  const [SPArr, setSPArr] = useState([]);
  const [SPArrIndex, setSPArrIndex] = useState(0);

  function getRecSparingPartners() {
    axios.get("/api/get_rec_sp").then((res) => {
      console.log(res.data);
      setSPArr(res.data);
      changeRecSPArr(res.data);
    });
  }

  useEffect(() => {
    getRecSparingPartners();
  }, []);

  function nextRecSP() {
    setSPArrIndex(SPArrIndex + 1);
  }

  return (
    <div>
      <div className="sp_list">
        {SPArr.map((SPid) => (
          <SPBox SPid={SPid} />
        ))}
      </div>
      <div>{SPArrIndex}</div>
      <button onClick={() => props.toggleDarkMode()}>Light/Dark</button>
      <button onClick={nextRecSP}>Next</button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    darkMode: reduxState.darkMode.darkMode,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     darkModeToggle: () => {
//       dispatch({ type: "TOGGLE_DARK_MODE" });
//     },
//   };
// }

export default connect(mapStateToProps, { toggleDarkMode })(MainSPList);
