import styled from 'styled-components'
import { IAlignProps } from '../Align'

const returnChildren = (children: any[]) => {
  let string = ''
  children.forEach(element => {
    string += 'auto '
  })

  return string
}

export const AlignWrapper = styled.div<IAlignProps>`
	display: grid;
	position: relative;
	grid-template-${props => (props.vertical ? 'rows' : 'columns')}: ${props => returnChildren(props.children)};
    grid-${props => (props.vertical ? 'row' : 'column')}-gap: ${props => props.margin};
    justify-content: ${props => props.align};
    ${props => (props.classList ? props.classList : {})};
`
