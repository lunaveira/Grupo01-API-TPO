import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import SubscriptionTable from "./SubscriptionTable";
import SubscriptionInfo from "./SubscriptionInfo";
import CustomTable from "./MateriasLista";
import NavBar from "../navigationAlumno/NavBar";
import Balance from "../navigationAlumno/Balance";


const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function SubscripcionAlumno(props) {
  const {
    transactions,
    classes,
    openAddBalanceDialog,
    selectSubscription,
    pushMessageToSnackbar,
    targets,
    setTargets,
    messages,
    selectedTab,
  } = props;

  useEffect(selectSubscription, [selectSubscription]);

  return (
    <body>
    <header>
      <NavBar
        selectedTab={selectedTab}
        messages={messages}
        openAddBalanceDialog={openAddBalanceDialog}
      />
    </header>
    <Paper>
      <List disablePadding>
        {/* <SubscriptionInfo openAddBalanceDialog={openAddBalanceDialog} /> */}
        <Divider className={classes.divider} />
        {/* <SubscriptionTable transactions={transactions} /> */}
        
      </List>
    </Paper>
    </body>
  );
}

SubscripcionAlumno.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
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
};

export default withStyles(styles)(SubscripcionAlumno);
