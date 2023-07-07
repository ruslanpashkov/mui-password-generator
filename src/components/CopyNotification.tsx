import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { FC, memo, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

type Props = {
  isOpened: boolean;
  closeNotification: () => void;
};

const CopyNotification: FC<Props> = memo(({
  isOpened,
  closeNotification,
}) => {
  const { theme } = useContext(ThemeContext);

  const alertStyle: AlertProps = theme === 'light'
    ? { variant: 'standard', severity: 'info' }
    : { variant: 'filled', severity: 'success' };

  return (
    <Snackbar open={isOpened} autoHideDuration={3000}>
      <Alert
        {...alertStyle}
        onClose={closeNotification}
      >
        <AlertTitle>
          Password has been copied
        </AlertTitle>

        You can access it from the clipboard
      </Alert>
    </Snackbar>
  );
});

export default CopyNotification;
