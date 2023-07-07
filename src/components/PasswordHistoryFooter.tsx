import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import { FC, memo } from 'react';
import ClearHistoryButton from './ClearHistoryButton';

type Props = {
  listWidth: object;
  clearHistory: () => void;
  closeHistory: () => void;
  hasPasswords: boolean;
};

const PasswordHistoryFooter: FC<Props> = memo(({
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
