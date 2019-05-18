import React, { Children, FunctionComponent } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { dimensions } from '../recoil2/styles/classList'

interface ISwiperProps {
  children: JSX.Element[]
  isSlide?: number
  onChangeIndex?: () => void
  onSwitching?: (index: number) => void
}

const Swiper: FunctionComponent<ISwiperProps> = ({ children, isSlide, onChangeIndex, onSwitching }) => {
  const styleWrapper = {
    padding: '0px'
  }
  const slideRenderer = (item: any, index: number) => item

  return (
    <SwipeableViews
      onSwitching={onSwitching}
      axis={'y'}
      onChangeIndex={onChangeIndex}
      index={isSlide}
      style={styleWrapper}>
      {Children.map(children, slideRenderer)}
    </SwipeableViews>
  )
}

export { Swiper }
