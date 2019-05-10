import React from 'react'
import { Layer } from '../recoil2/components/Layer/Layer'

export default () => (
  <Layer fill={1} scrollY>
    <Layer flexCenter fill={1}>
      Intro
    </Layer>
    <Layer flexCenter fill={1}>
      What
    </Layer>
    <Layer flexCenter fill={1}>
      Latest Work
    </Layer>
    <Layer flexCenter fill={1}>
      Contact
    </Layer>
  </Layer>
)
