const renameKeys = (keysMap, obj) =>
    Object.keys(obj).reduce(
    (acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
);

function linksAttributes(props) {
  return renameKeys({}, props);
}

// Tool Tip Attribites
function toolTipAttributes(props) {
  return renameKeys(
    {
      // customArrow: 'arrow',
      // customDisableFocusListener: 'disableFocusListener',
      // customClasses: 'classes',
      // customHover: 'hover',
      // customDisableHoverListener: 'disableHoverListener',
      // customDisableTouchListener: 'disableTouchListener',
      // customEnterDelay: 'enterDelay',
      // customId: 'id',
      // customInteractive: 'interactive',
      // customLeaveDelay: 'leaveDelay',
      customLeaveTouchDelay: 'leaveTouchDelay',
      // customOnClose: 'onClose',
      // customOnOpen: 'onOpen',
      // customOpen: 'open',
      customPlacement: 'placement',
      // customTransitionComponent: 'TransitionComponent',
      // customTransitionProps: 'TransitionProps',
      customTitle: 'title'
    },
    props
  );
}
export {
    linksAttributes,
    toolTipAttributes
}