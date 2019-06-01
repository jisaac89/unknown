import React from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyle } from '../styles/globalStyle'
import { Layer } from '../recoil2/components/Layer/Layer'

export const Layout = ({ children, title }) => (
  <Layer fill={1}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <>
      {children}
      <GlobalStyle />
    </>
  </Layer>
)
