import React from 'react';
import zxcvbn from 'zxcvbn';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinearProgress from '@mui/material/LinearProgress';
import { FormControl, InputAdornment, InputLabel } from '@mui/material';

type Props = {
  password: string;
  copyPassword: (password: string) => void;
  changePassword: (password: string) => void;
  hasActiveCheckbox: boolean;
  hasError: boolean;
};

const PasswordField: React.FC<Props> = React.memo(({
  password,
  copyPassword,
  changePassword,
  hasActiveCheckbox,
  hasError,
}) => {
  const FIELD_HEIGHT = '53px';

  const labelText = hasActiveCheckbox
    ? 'Generate your password'
    : 'Select at least one option';

  const passwordStrength = password.length >= 4
    ? (zxcvbn(password).score + 1) * 20
    : 0;

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    changePassword(event.target.value);
  };

  const handlePasswordCopy = () => copyPassword(password);

  const isFieldsDisabled = !hasActiveCheckbox || hasError;
  const isCopyButtonDisabled = isFieldsDisabled || !password.length;
  const isLinearProgressVisible = !isFieldsDisabled && password.length > 0;

  return (
    <FormControl sx={{ position: 'relative' }} variant="outlined">
      <InputLabel sx={{ fontWeight: 700 }}>
        {labelText}
      </InputLabel>

      <OutlinedInput
        sx={{ pr: 0, fontWeight: 700, height: FIELD_HEIGHT }}
        fullWidth
        label={labelText}
        value={password}
        aria-label="Generated password"
        error={isFieldsDisabled}
        onChange={handlePasswordChange}
        endAdornment={
          <InputAdornment position="end">
            <Button
              sx={{
                height: FIELD_HEIGHT,
                borderRadius: 0,
              }}
              aria-label="Copy password"
              disabled={isCopyButtonDisabled}
              onClick={handlePasswordCopy}
            >
              <ContentCopyIcon fontSize="medium" />
            </Button>

            {isLinearProgressVisible && (
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
                aria-label="Password strength"
              />
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default PasswordField;
