import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import EmptyNotification from './EmptyNotification';
import PasswordHistoryList from './PasswordHistoryList';
import PasswordHistoryFooter from './PasswordHistoryFooter';
import { Password } from '../types/Password';

type Props = {
  passwords: Password[];
  copyPassword: (password: string) => void;
  deletePassword: (password: string) => void;
  clearHistory: () => void;
  closeHistory: () => void;
  isOpened: boolean;
};

const PasswordHistory: React.FC<Props> = ({
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
};

export default PasswordHistory;
