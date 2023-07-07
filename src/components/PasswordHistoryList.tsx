import Collapse from '@mui/material/Collapse';
import { FC, memo } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Password } from '../types/Password';
import PasswordHistoryItem from './PasswordHistoryItem';

type Props = {
  passwords: Password[];
  copyPassword: (password: string) => void;
  deletePassword: (password: string) => void;
};

const PasswordHistoryList: FC<Props> = memo(({
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
