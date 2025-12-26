import { grey } from '@mui/material/colors';

export const tableBodyStyle = {
  row: {
    '&:hover': {
      'background-color': 'rgba(230, 236, 249, 0.54) !important',
      cursor: 'pointer'
    },
    '&:focus': {
      'background-color': 'rgb(230, 236, 249) !important'
    }
  },
  tableRow: {
    height: '72px',
    fontSize: '16px',
    padding: '16px',
    paddingTop: '16px'
  },
  separator: {
    borderTop: '8px solid rgb(230, 233, 240)'
  },
  selectedRow: {
    'background-color': 'rgb(230, 236, 249) !important'
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer'
    }
  },
  checkboxChecked: {
    color: '#003baf'
  },
  checkboxCheckedDisabled: {
    color: grey[600]
  },
  rootCheckbox: {
    position: 'absolute',
    top: '0',
    left: '64px',
    paddingTop: '8px'
  },
  disabledRow: {
    '& td': {
      opacity: 0.5
    },
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'disabled'
    }
  },
  highlightActiveGroup: {
    background: 'rgb(241, 244, 251) !important'
  }
}