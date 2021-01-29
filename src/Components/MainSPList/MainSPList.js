import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import SPBox from "../SPBox/SPBox";
// import { getRecSP } from "../../../server/controllers/sPartnerController";

//we need to call getRecSP from sPartnerController
//and pass in User_id off of this state
//it will return user_id objects within an array
//we need to map each object into its own SPBox

const MainSPList = () => {
  function getSparingPartners() {
    axios.get("/api/get_rec_sp");
  }

  let CPArr = getSparingPartners();

  return (
    <div>
      <h1>MainSPList</h1>
      <div className="sp_list">
        {CPArr.map((SPid) => (
          <SPBox SPid={SPid} />
        ))}
      </div>
      {/* <div className="date_list">
        {datezArr.map((date_idea) => (
          <Date_Idea ideaNId={date_idea} />
        ))}
      </div> */}
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
  };
}

export default connect(mapStateToProps, {})(MainSPList);
