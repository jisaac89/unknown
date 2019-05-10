import * as React from 'react'
import { AlignWrapper } from './style'

export interface IAlignProps {
  children?: any
  margin?: string
  vertical?: boolean
  align?: 'center'
  classList?: object[]
  columns?: number[][]
  style?: {}
}

const Align = (props: IAlignProps) => {
  return <AlignWrapper {...props}>{props.children}</AlignWrapper>
}

export { Align }
