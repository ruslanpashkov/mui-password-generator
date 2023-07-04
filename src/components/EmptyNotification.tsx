import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EmptyNotification: React.FC = React.memo(() => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      sx={{ fontWeight: 700 }}
      component="h3"
      variant="h5"
    >
      Nothing to show! 🥲
    </Typography>
  </Box>
));

export default EmptyNotification;
