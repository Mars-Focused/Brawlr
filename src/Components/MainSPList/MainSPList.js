import React from "react";
import { connect } from "react-redux";

const MainSPList = (props) => {
  return (
    <div>
      <h1>MainSPList</h1>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
  };
}

export default connect(mapStateToProps, {})(MainSPList);
