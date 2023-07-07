import Paper from '@mui/material/Paper';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { getPassword } from '../helpers/getPassword';
import useLocalStorage from '../hooks/useLocalStorage';
import { Checkboxes } from '../types/Checkboxes';
import { Fields } from '../types/Fields';
import GenerateButton from './GenerateButton';
import PasswordField from './PasswordField';
import PasswordLengthSlider from './PasswordLengthSlider';
import PasswordOptions from './PasswordOptions';

type Props = {
  copyPassword: (password: string) => void;
};

const initialFields: Fields = {
  startsWith: '',
  endsWith: '',
  exclude: '',
};

const initialCheckboxes: Checkboxes = {
  length: 8,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
  strict: false,
};

const PasswordGenerator: FC<Props> = memo(({ copyPassword }) => {
  const [password, setPassword] = useState('');
  const [fields, setFields] = useState(initialFields);
  const [checkboxes, setCheckboxes] = useLocalStorage('set', initialCheckboxes);
  const [hasError, setHasError] = useState(false);

  if (password.includes('undefined')) {
    setPassword('Invalid input! Check your data');
    setHasError(true);
  }

  const generatePassword = useCallback(() => {
    try {
      const generatedPassword = checkboxes.strict
        ? getPassword({ ...checkboxes } as Checkboxes)
        : getPassword({ ...checkboxes, ...fields } as Fields & Checkboxes);

      setPassword(generatedPassword);
    } catch {
      setPassword('');
      setHasError(true);
    }
  }, [fields, checkboxes]);

  useEffect(() => {
    generatePassword();
    setHasError(false);
  }, [fields, checkboxes, generatePassword]);

  const changePassword = useCallback((passcode: string) => {
    setPassword(passcode);
  }, []);

  const changePasswordLength = useCallback((value: number | number[]) => {
    setCheckboxes((currentState: Fields) => ({
      ...currentState,
      length: value as number,
    }));
  }, [setCheckboxes]);

  const changeCheckboxStatus = useCallback((
    checkboxName: keyof Checkboxes,
  ) => {
    setCheckboxes((currentState: Checkboxes) => ({
      ...currentState,
      [checkboxName]: !currentState[checkboxName],
    }));
  }, [setCheckboxes]);

  const changeInputValue = useCallback((stateKey: string, value: string) => {
    setFields((currentState) => ({
      ...currentState,
      [stateKey]: value,
    }));
  }, []);

  const hasActiveCheckbox = useMemo(() => (
    checkboxes.uppercase
      || checkboxes.lowercase
      || checkboxes.numbers
      || checkboxes.symbols
  ), [checkboxes]);

  return (
    <Paper
      sx={{
        p: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
      component="form"
      elevation={2}
    >
      <PasswordField
        password={password}
        copyPassword={copyPassword}
        changePassword={changePassword}
        hasActiveCheckbox={hasActiveCheckbox}
        hasError={hasError}
      />

      <PasswordOptions
        fields={fields}
        checkboxes={checkboxes}
        changePasswordLength={changePasswordLength}
        changeInputValue={changeInputValue}
        changeCheckboxStatus={changeCheckboxStatus}
        hasActiveCheckbox={hasActiveCheckbox}
      />

      <PasswordLengthSlider
        length={checkboxes.length}
        strict={checkboxes.strict}
        changeLength={changePasswordLength}
        hasActiveCheckbox={hasActiveCheckbox}
      />

      <GenerateButton
        generatePassword={generatePassword}
        hasActiveCheckbox={hasActiveCheckbox}
      />
    </Paper>
  );
});

export default PasswordGenerator;
