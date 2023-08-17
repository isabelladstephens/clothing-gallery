'use client'

import React from 'react'
import { Box, Icon } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import large_icon from '../../../public/large_icon.png'
import { GitHub } from '@mui/icons-material';

export default function Navbar({children}: any) {
  return (
    <Box>
      <Link href="/">
        <Image src={large_icon} alt="logo"/>
      </Link>
      <Link href="/gallery">
        Gallery
      </Link>
      <Link href="/">
        <Icon>
          <GitHub/>
        </Icon>
      </Link>
    </Box>
  )
}
