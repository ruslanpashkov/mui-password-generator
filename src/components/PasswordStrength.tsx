import LinearProgress from '@mui/material/LinearProgress';
import { FC, memo } from 'react';
import zxcvbn from 'zxcvbn';

type Props = {
  password: string;
};

const PasswordStrength: FC<Props> = memo(({ password }) => {
  const passwordStrength = password.length >= 4
    ? (zxcvbn(password).score + 1) * 20
    : 0;

  return (
    <LinearProgress
      sx={{
        zIndex: 1,
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        borderRadius: '0 0 4px 4px',
      }}
      variant="determinate"
      value={passwordStrength}
      aria-label="Password strength" />
  );
});

export default PasswordStrength;
