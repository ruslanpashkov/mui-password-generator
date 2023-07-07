import ClearIcon from '@mui/icons-material/Clear';
import { ListItemButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FC, memo, useState } from 'react';
import { Password } from '../types/Password';

type Props = {
  password: Password;
  copyPassword: (password: string) => void;
  deletePassword: (password: string) => void;
};

const PasswordHistoryItem: FC<Props> = memo(({
  password,
  copyPassword,
  deletePassword,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const removePassword = (
    event: React.MouseEvent<HTMLButtonElement>,
    passcode: string,
  ) => {
    event.stopPropagation();

    deletePassword(passcode);
  };

  return (
    <>
      <ListItem
        disablePadding
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="Delete password"
            onClick={(event) => {
              removePassword(event, password.password);
            }}
          >
            {isHovered && (<ClearIcon/>)}
          </IconButton>
        }
      >
        <ListItemButton onDoubleClick={() => copyPassword(password.password)}>
          <ListItemText
            primaryTypographyProps={{
              variant: 'subtitle1',
              style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
            primary={password.password}
            secondary={password.createdAt}
          />
        </ListItemButton>
      </ListItem>

      <Divider/>
    </>
  );
});

export default PasswordHistoryItem;
