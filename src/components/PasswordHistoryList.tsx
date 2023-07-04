import React, { useCallback, useState } from 'react';
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
}) => {
  const [selectedPasswordId, setSelectedPasswordId] = useState(0);

  const selectPassword = useCallback((id: number) => {
    setSelectedPasswordId(id);
  }, []);

  return (
    <TransitionGroup>
      {passwords.map((password) => (
        <Collapse key={password.id}>
          <PasswordHistoryItem
            password={password}
            selectedPasswordId={selectedPasswordId}
            selectPassword={selectPassword}
            copyPassword={copyPassword}
            deletePassword={deletePassword}
          />
        </Collapse>
      ))}
    </TransitionGroup>
  );
});

export default PasswordHistoryList;
