import React from 'react';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ClearHistoryButton from './ClearHistoryButton';

type Props = {
  listWidth: object;
  clearHistory: () => void;
  closeHistory: () => void;
  hasPasswords: boolean;
};

const PasswordHistoryFooter: React.FC<Props> = React.memo(({
  listWidth,
  clearHistory,
  closeHistory,
  hasPasswords,
}) => (
  <ListItem
    sx={{
      ...listWidth,
      position: 'fixed',
      bottom: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'background.default',
    }}
  >
    <ClearHistoryButton
      clearHistory={clearHistory}
      hasPasswords={hasPasswords}
    />

    <Button
      variant="text"
      color="inherit"
      aria-label="Close history"
      onClick={closeHistory}
    >
      <CloseIcon />
    </Button>
  </ListItem>
));

export default PasswordHistoryFooter;
