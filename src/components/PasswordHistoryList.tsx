import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import PasswordHistoryItem from './PasswordHistoryItem';
import { Password } from '../types/Password';

type Props = {
  passwords: Password[];
  copyPassword: (password: string) => void;
  deletePassword: (password: string) => void;
};

const PasswordHistoryList: React.FC<Props> = React.memo(({
  passwords,
  copyPassword,
  deletePassword,
}) => (
  <TransitionGroup>
    {passwords.map((password) => (
      <Collapse key={password.id}>
        <PasswordHistoryItem
          password={password}
          copyPassword={copyPassword}
          deletePassword={deletePassword}
        />
      </Collapse>
    ))}
  </TransitionGroup>
));

export default PasswordHistoryList;
