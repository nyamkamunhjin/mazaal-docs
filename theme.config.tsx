import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <Image className='h-20' src={`/mazaal-logo-mini.svg`} width={40} height={40} alt="Mazaal Logo" />,
  footer: {
    text: 'Mazaal AI',
  },
  primaryHue: 18,
  primarySaturation: 100,
}

export default config
