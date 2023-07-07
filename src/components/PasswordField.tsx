import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FC, Suspense, lazy, memo } from 'react';

const PasswordStrength = lazy(() => import('./PasswordStrength'));

type Props = {
  password: string;
  copyPassword: (password: string) => void;
  changePassword: (password: string) => void;
  hasActiveCheckbox: boolean;
  hasError: boolean;
};

const PasswordField: FC<Props> = memo(({
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
        sx={{ pr: 0, height: FIELD_HEIGHT, fontWeight: 700 }}
        fullWidth
        label={labelText}
        value={password}
        role="textbox"
        aria-label="Password"
        error={isFieldsDisabled}
        onChange={handlePasswordChange}
        endAdornment={
          <InputAdornment position="end">
            <Button
              sx={{ height: FIELD_HEIGHT, borderRadius: 0 }}
              aria-label="Copy password"
              disabled={isCopyButtonDisabled}
              onClick={handlePasswordCopy}
            >
              <ContentCopyIcon fontSize="medium" />
            </Button>

            {isLinearProgressVisible && (
              <Suspense>
                <PasswordStrength password={password} />
              </Suspense>
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default PasswordField;
