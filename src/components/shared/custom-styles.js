import { InputBase, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import styled2 from '@mui/material/styles/styled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// Login TabBar
export const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 18px 16px;
    text-transform: uppercase;
    border: none;
    display: flex;
    justify-content: center;
  
    &.${buttonUnstyledClasses.focusVisible} {
      color: #fff;
      outline: none;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: #000 !important;
      color: #5bbc2e;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

export const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

export const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: #19305a;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;


// AppBar
export const Search = styled2('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled2('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled2(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Jobs Table
export const StyledTableCell = styled2(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderBottom: "1px solid #707070",
    textAlign: "start"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled2(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  },
  '&:last-child td': {
    textAlign: "start"
  }
}));

export const Div = styled2('div')(({ theme }) => ({
  ...theme.typography.button
}));

// Create job modal
export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const inputLabelStyle = {
  style: {fontSize: "14px", textTransform: "capitalize"}
}
export const inputDateLabelStyle ={
  shrink: true, style: {fontSize: "14px", textTransform: "capitalize"}
}