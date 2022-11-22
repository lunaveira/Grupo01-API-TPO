import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import SettingsArea from "./SettingsArea";
import UserDataArea from "./UserDataArea";
import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";
import NavBar from "../navigationAlumno/NavBar";
import Balance from "../navigationAlumno/Balance";
// import EnhancedTable from "./ListaMaterias";

import BasicTable from "./ListaMaterias";



function DashboardAlumno(props) {
  const {
    selectDashboard,
    CardChart,
    statistics,
    toggleAccountActivation,
    pushMessageToSnackbar,
    targets,
    setTargets,
    isAccountActivated,
    messages,
    selectedTab,
    openAddBalanceDialog,
    openContratarDialog,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (

    
    <body>
       <NavBar
        selectedTab={selectedTab}
        messages={messages}
        openAddBalanceDialog={openAddBalanceDialog}
      />
    <Fragment>



      <BasicTable openContratarDialog={openContratarDialog} />

      
    
    
    </Fragment>
    </body>
  );
}

DashboardAlumno.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
  openContratarDialog: PropTypes.func.isRequired,
};

export default DashboardAlumno;
