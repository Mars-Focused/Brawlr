import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SPBox from "../SPBox/SPBox";

const MainSPList = () => {
  const [SPArr, setSPArr] = useState([]);
  function getRecSparingPartners() {
    axios.get("/api/get_rec_sp").then((res) => {
      console.log(res.data);
      setSPArr(res.data);
    });
  }

  useEffect(() => {
    getRecSparingPartners();
  }, []);

  return (
    <div>
      <h1>MainSPList</h1>
      <div className="sp_list">
        {SPArr.map((SPid) => (
          <SPBox SPid={SPid} />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    darkMode: reduxState.darkMode.darkMode,
  };
}

export default connect(mapStateToProps, {})(MainSPList);
