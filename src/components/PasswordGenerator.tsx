import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Paper from '@mui/material/Paper';
import PasswordField from './PasswordField';
import PasswordOptions from './PasswordOptions';
import PasswordLengthSlider from './PasswordLengthSlider';
import GenerateButton from './GenerateButton';
import { Fields } from '../types/Fields';
import { Checkboxes } from '../types/Checkboxes';
import useLocalStorage from '../hooks/useLocalStorage';
import { getPassword } from '../helpers/getPassword';

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

const PasswordGenerator: React.FC<Props> = React.memo(({ copyPassword }) => {
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
  }, []);

  const changeCheckboxStatus = useCallback((
    checkboxName: keyof Checkboxes,
  ) => {
    setCheckboxes((currentState: Checkboxes) => ({
      ...currentState,
      [checkboxName]: !currentState[checkboxName],
    }));
  }, []);

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
      component="form"
      elevation={2}
      sx={{
        p: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
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
