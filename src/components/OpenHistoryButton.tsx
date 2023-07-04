import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import HistoryIcon from '@mui/icons-material/History';

type Props = {
  openHistory: () => void;
};

const OpenHistoryButton: React.FC<Props> = React.memo(({ openHistory }) => (
  <Tooltip title="History" enterDelay={500}>
    <Button
      sx={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        transform: 'translate(-25%, -25%)',
      }}
      variant="contained"
      onClick={openHistory}
    >
      <HistoryIcon fontSize="large" />
    </Button>
  </Tooltip>
));

export default OpenHistoryButton;
