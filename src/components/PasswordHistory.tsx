import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { FC, memo } from 'react';
import { Password } from '../types/Password';
import EmptyNotification from './EmptyNotification';
import PasswordHistoryFooter from './PasswordHistoryFooter';
import PasswordHistoryList from './PasswordHistoryList';

type Props = {
  passwords: Password[];
  copyPassword: (password: string) => void;
  deletePassword: (password: string) => void;
  clearHistory: () => void;
  closeHistory: () => void;
  isOpened: boolean;
};

const PasswordHistory: FC<Props> = memo(({
  passwords,
  copyPassword,
  deletePassword,
  clearHistory,
  closeHistory,
  isOpened,
}) => {
  const hasPasswords = passwords.length > 0;

  const listWidth = {
    width: {
      xs: '100vw',
      sm: '100vw',
      md: '33vw',
    },
  };

  return (
    <Drawer
      anchor="right"
      open={isOpened}
      onClose={closeHistory}
    >
      {!hasPasswords && (
        <EmptyNotification />
      )}

      <List
        sx={{
          ...listWidth,
          mb: '50px',
        }}
        disablePadding
      >
        {hasPasswords && (
          <PasswordHistoryList
            passwords={passwords}
            copyPassword={copyPassword}
            deletePassword={deletePassword}
          />
        )}
      </List>

      <PasswordHistoryFooter
        listWidth={listWidth}
        clearHistory={clearHistory}
        closeHistory={closeHistory}
        hasPasswords={hasPasswords}
      />
    </Drawer>
  );
});

export default PasswordHistory;
