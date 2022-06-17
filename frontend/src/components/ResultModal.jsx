import React, { useState } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import StateContext from '../contexts/ContextProvider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: '0 0.5px 1.5px 1px rgba(0, 0, 0, 0.5)',
    p: 6,
  };
  

const ResultModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button variant='outlined' onClick={handleOpen}>情報を見る</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="municipality-information"
      >
        <Box sx={style}>
          <Typography id="municipality-information" variant="h6" component="h2" sx={{ p: 1}}>
            {props.prefecture} {props.city} {props.ward && props.ward}
          </Typography>
          <Typography id="municipality-information" sx={{ mt: 3, p: 1 }}>
            総人口： {props.total_population} 人
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            15歳未満人口： {props.those_under_15} 人
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            15～64歳人口： {props.those_between_15_and_64} 人
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            65歳以上人口： {props.those_over_65} 人
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            幼稚園数： {props.kindergardens} 園
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            小学校数： {props.elementary_schools} 校
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            中学校数： {props.junior_high_schools} 校
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            高等学校数： {props.high_schools} 校
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            病院数： {props.hospitals} 施設
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            人口増減率： {props.population_trends} %
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            転入率： {props.move_in_ratio} %
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            転出率： {props.move_out_ratio} %
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            第1次産業就業者比率： {props.primary_industry_ratio} %
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            第2次産業就業者比率： {props.secondary_industry_ratio} %
          </Typography>
          <Typography id="municipality-information" sx={{ p: 1 }}>
            第3次産業就業者比率： {props.tertiary_industry_ratio} %
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ResultModal;