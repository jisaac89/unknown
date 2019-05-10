import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'
import { Swiper } from '../components/swiper'
import { GlobalStyle } from '../styles/globalStyle'

export default () => {
  return (
    <>
      <Layer id="main-wrapper" fill={1} flex={'row'}>
        <Swiper>
          <Layer flexCenter fill={1}>
            A
          </Layer>
          <Layer flexCenter fill={1}>
            B
          </Layer>
          <Layer flexCenter fill={1}>
            C
          </Layer>
        </Swiper>
      </Layer>
      <GlobalStyle />
    </>
  )
}
