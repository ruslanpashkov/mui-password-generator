import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

const HeaderTitle: FC = memo(() => (
  <Typography
    sx={{
      m: '60px  0 40px',
      fontWeight: 700,
    }}
    component="h1"
    variant="h4"
    textAlign="center"
  >
    Password Generator
  </Typography>
));

export default HeaderTitle;
