import React, { Fragment, useEffect } from "react";
import { getNobel } from "../../actions/nobelAction";
import NobelItem from "./NobelItem";
import { connect } from "react-redux";

const Nobel = ({
  laureates,
  nobel: { nobels, loading },

  getNobel,
  getNobelLaureates
}) => {
  useEffect(() => {
    getNobel();

    //eslint-disable-next-line
  }, []);
  if (loading || nobels === null) {
    return "Loading...";
  }

  return (
    <Fragment>
      <div>
        {nobels.map((nobel, index) => <NobelItem key={index} nobel={nobel} />)}
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  nobel: state.nobel
});

export default connect(mapStateToProps, { getNobel })(Nobel);
