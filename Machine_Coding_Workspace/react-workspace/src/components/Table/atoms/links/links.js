import React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import MaterialLink from '@mui/material/Link';
import { linksAttributes } from '../attributes';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: 'Roboto-Medium'
  },
  underlineHover: {
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }
}));

function Links(props) {
  const classes = useStyles();
  const { children } = props;
  const linkAttr = linksAttributes(props);
  return (
    <MaterialLink
      {...linkAttr}
      classes={{ root: classes.root, underlineHover: classes.underlineHover }}
    >
      {children}
    </MaterialLink>
  );
}
Links.propTypes = {
  children: PropTypes.string.isRequired
};
export default Links;
