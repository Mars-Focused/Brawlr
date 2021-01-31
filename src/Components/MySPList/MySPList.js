import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import SPInfoBox from "../SPInfoBox/SPInfoBox";

//this components state is called mySPArr
//from here to we need to call "app.get("/api/get_my_sp",{})"
//and save the result to mySPArr
//then we need to map the contents into SPInfoBox
//Passing down only the SPId into Each

const MySPList = () => {
  const [mySPArr, setMySPArr] = useState([]);
  const ref = useRef(); // <- this was added

  useEffect(() => {
    const prevSPArr = ref.current;
    ref.current = mySPArr; // <- this was added
    if (prevSPArr != mySPArr) {
      // ^^ this was changed from state
      axios.get("/api/get_my_sp").then((res) => {
        console.log(res.data);
        setMySPArr(res.data);
      });
    }
  }, []);

  return (
    <div>
      <div className="my_sp_list">
        {mySPArr.map((mySPid) => (
          <SPInfoBox mySPid={mySPid} />
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

export default connect(mapStateToProps, {})(MySPList);
