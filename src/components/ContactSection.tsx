import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import { FC, memo } from 'react';

const ContactSection: FC = memo(() => (
  <Box sx={{ mt: '20px' }}>
    <ButtonGroup>
      <IconButton
        component="a"
        href="mailto:pashkov@mail.com"
        aria-label="Email: pashkov@mail.com"
      >
        <EmailIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://github.com/ruslanpashkov"
        target="_blank"
        aria-label="Github: ruslanpashkov"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/ruslanpashkov/"
        target="_blank"
        aria-label="LinkedIn: ruslanpashkov"
      >
        <LinkedInIcon />
      </IconButton>
    </ButtonGroup>
  </Box>
));

export default ContactSection;
