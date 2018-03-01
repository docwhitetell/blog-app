import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'dva';

const styles = () => ({});
const SettingIndex = () => {
  return (<div />);
}

export default connect(
  ({ app, settings }) => ({ app, settings }
  ))(withStyles(styles)(SettingIndex));
