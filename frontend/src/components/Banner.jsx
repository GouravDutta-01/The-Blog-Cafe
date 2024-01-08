import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
const Image = styled(Box)({
    backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-arrangement-natural-material-stationery_23-2148898233.jpg?size=626&ext=jpg&ga=GA1.1.1724996770.1704636024&semt=ais")',
    backgroundPosition: 'center',
    color: "#27968b",
    height: "50vh", 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export default function Banner() {
  return (
    <Image>
        <Typography variant="h2" fontWeight= "600" fontFamily= "cursive">TheBlogCafe</Typography>
    </Image>
  )
}
