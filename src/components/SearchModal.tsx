import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function SearchModal(
  {
    open,
    handleClose,
    children
  }: {
    open: boolean,
    handleClose: () => void,
    children: React.ReactNode
  })
{
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          width: '100%',
          bgcolor: 'background.paper',
          border: 'none',
          boxShadow: 24,
        }}
        >
         {children}
        </Box>
      </Modal>
    </div>
  );
}
