import React from 'react';
import PropTypes from 'prop-types';
import MaterialTooltip from '@mui/material/Tooltip';
import { toolTipAttributes } from './attributes';



const ToolTips = props => {
  const tooltipAttr = toolTipAttributes(props);
  const { children } = props;
  if (tooltipAttr.title) {
    return (
      <MaterialTooltip {...tooltipAttr}>
        {children}
      </MaterialTooltip>
    );
  }
  return <>{children}</>;
};

ToolTips.propTypes = {
  children: PropTypes.node.isRequired
};

export default ToolTips;
