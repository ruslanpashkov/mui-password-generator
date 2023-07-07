import HistoryIcon from '@mui/icons-material/History';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FC, memo } from 'react';

type Props = {
  openHistory: () => void;
};

const OpenHistoryButton: FC<Props> = memo(({ openHistory }) => (
  <Tooltip title="History" enterDelay={500}>
    <Button
      sx={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        transform: 'translate(-25%, -25%)',
      }}
      variant="contained"
      aria-label="Open history"
      onClick={openHistory}
    >
      <HistoryIcon fontSize="large" />
    </Button>
  </Tooltip>
));

export default OpenHistoryButton;
