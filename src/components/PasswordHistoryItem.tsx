import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';
import { Password } from '../types/Password';

type Props = {
  password: Password;
  selectedPasswordId: number;
  selectPassword: (id: number) => void;
  copyPassword: (password: string) => void;
  deletePassword: (password: string) => void;
};

const PasswordHistoryItem: React.FC<Props> = React.memo(({
  password,
  selectedPasswordId,
  selectPassword,
  copyPassword,
  deletePassword,
}) => {
  const removePassword = (
    event: React.MouseEvent<HTMLButtonElement>,
    passcode: string,
  ) => {
    event.stopPropagation();

    deletePassword(passcode);
  };

  const isPasswordSelected = password.id === selectedPasswordId;

  return (
    <>
      <ListItemButton
        onDoubleClick={() => copyPassword(password.password)}
        onMouseEnter={() => selectPassword(password.id)}
        onMouseLeave={() => selectPassword(0)}
      >
        <ListItemText
          primary={password.password}
          secondary={password.createdAt}
        />

        {isPasswordSelected && (
          <IconButton onClick={(event) => {
            removePassword(event, password.password);
          }}>
            <ClearIcon/>
          </IconButton>
        )}
      </ListItemButton>

      <Divider/>
    </>
  );
});

export default PasswordHistoryItem;
