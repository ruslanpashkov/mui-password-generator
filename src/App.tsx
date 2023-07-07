import { FC, useState, useCallback } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HeaderTitle from './components/HeaderTitle';
import PasswordGenerator from './components/PasswordGenerator';
import ContactSection from './components/ContactSection';
import PasswordHistory from './components/PasswordHistory';
import CopyNotification from './components/CopyNotification';
import OpenHistoryButton from './components/OpenHistoryButton';
import ColorThemeSwitch from './components/ColorThemeSwitch';
import useLocalStorage from './hooks/useLocalStorage';
import { Password } from './types/Password';

const App: FC = () => {
  const [passwords, setPasswords] = useLocalStorage('passwords', []);
  const [isCopied, setIsCopied] = useState(false);
  const [isHistoryOpened, setIsHistoryOpened] = useState(false);

  const copyPassword = useCallback((passcode: string) => {
    navigator.clipboard.writeText(passcode)
      .then(() => {
        if (isCopied) {
          return;
        }

        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      });
  }, [isCopied]);

  const savePasswords = useCallback((passcode: string) => {
    copyPassword(passcode);

    setPasswords((currentState: Password[]) => [
      {
        id: Date.now(),
        password: passcode,
        createdAt: new Date().toString().slice(0, 24),
      },
      ...currentState.filter(({ password }) => (
        password !== passcode
      )),
    ]);
  }, [copyPassword, setPasswords]);

  const deletePassword = useCallback((passcode: string) => {
    setPasswords((currentState: Password[]) => (
      currentState.filter(({ password }) => password !== passcode)
    ));
  }, [setPasswords]);

  const clearHistory = useCallback(() => {
    setPasswords([]);
  }, [setPasswords]);

  const toggleHistoryVisibility = useCallback(() => {
    setIsHistoryOpened((currentState) => !currentState);
  }, []);

  const closeCopyNotification = useCallback(() => {
    setIsCopied(false);
  }, []);

  return (
    <Box>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HeaderTitle />

        <PasswordGenerator copyPassword={savePasswords} />

        <ContactSection />

        <PasswordHistory
          passwords={passwords}
          copyPassword={copyPassword}
          deletePassword={deletePassword}
          clearHistory={clearHistory}
          closeHistory={toggleHistoryVisibility}
          isOpened={isHistoryOpened}
        />

        <CopyNotification
          isOpened={isCopied}
          closeNotification={closeCopyNotification}
        />

        <OpenHistoryButton openHistory={toggleHistoryVisibility} />

        <ColorThemeSwitch />
      </Container>
    </Box>
  );
};

export default App;
