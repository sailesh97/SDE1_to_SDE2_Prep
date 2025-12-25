import React from 'react'
import { makeStyles } from '@mui/styles';

export function NewUXSortTableCheckedIcon({color}) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="4" fill={color}/>
    <path d="M16.5013 8.8125C16.7096 9.02083 16.7096 9.33333 16.5013 9.52083L11.0013 15.0208C10.8138 15.2292 10.5013 15.2292 10.3138 15.0208L7.48047 12.1875C7.27214 12 7.27214 11.6875 7.48047 11.4792C7.66797 11.2917 7.98047 11.2917 8.16797 11.4792L10.668 13.9792L15.8138 8.8125C16.0013 8.625 16.3138 8.625 16.5013 8.8125Z" fill="white"/>
  </svg>;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '24px',
    height: '24px',
    cursor: 'pointer'
  },
  largeicon: { transform: `scale(2)`, paddingTop: '0.5em' }
}));

export default function Icons(props) {
    const { type, color, fontSize, secondaryColor } = props;
    const classes = useStyles();
    switch (type) {
        case 'newUXSortTableCheckedIcon':
            return <NewUXSortTableCheckedIcon color={color}/>;
        default:
            return null;
    }
}
