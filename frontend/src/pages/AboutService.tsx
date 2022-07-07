import React from "react";
import {
  Typography,
  Stack,
  Box,
} from "@mui/material";

const AboutService = () => {
  return (
    <Box sx={{ m: 32,  }}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={10}
        sx={{  minWidth: 220 }}
      >
        <Typography variant="h3" mb={5} sx={{ textDecoration: "underline 2px", fontFamily: 'Sawarabi Gothic' }}>
          サービスについて
        </Typography>

        <Typography variant="h5" sx={{ lineHeight: "3rem", letterSpacing: '.2rem'}}>
          全国約1,900の市区町村を機械学習※により分類。
        </Typography>
        <Typography variant="h5" sx={{ lineHeight: "3rem", letterSpacing: '.2rem'}}>
          故郷と ”にてるまち” を見つけてくれるサービスです。
        </Typography>
        <Stack direction="column" alignSelf="flex-end">
        <Typography mb={2} sx={{ color: '#37474f' }}>
          ※統計情報を基に分類しております。
        </Typography>
        <Typography sx={{ color: '#37474f' }}>
          統計年により、現在の数値と異なる場合があります。
        </Typography>
      </Stack>
      </Stack>
      
    </Box>
  );
};

export default AboutService;
