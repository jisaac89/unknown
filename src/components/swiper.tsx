import React, { Children, FunctionComponent } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { dimensions } from '../recoil2/styles/classList'

interface ISwiperProps {
  children: JSX.Element[]
  isSlide?: number
  onChangeIndex?: () => void
}

const Swiper: FunctionComponent<ISwiperProps> = ({ children, isSlide, onChangeIndex }) => {
  const styleWrapper = {
    padding: '0px'
  }
  const slideRenderer = (item: any, index: number) => item

  return (
    <SwipeableViews axis={'y'} onChangeIndex={onChangeIndex} index={isSlide} style={styleWrapper}>
      {Children.map(children, slideRenderer)}
    </SwipeableViews>
  )
}

export { Swiper }
