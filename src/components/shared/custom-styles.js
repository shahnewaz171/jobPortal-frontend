import { styled } from '@mui/system';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
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
      background-color: ${blue[200]};
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