import styled from 'styled-components';
import {
	border,
	dimensions,
	fill,
	flexCenter,
	flexDirection,
	m,
	overflow,
	scroll,
	scrollX,
	scrollY,
	textAlign
} from '../../../styles/classList';
import { ILayerProps } from '../ILayer';

export const LayerWrapper = styled.div<ILayerProps>`
	display: block;
	position: relative;
	-webkit-overflow-scrolling: touch;
	${props => (props.flex ? flexDirection(props.flex) : null)};
	${props => (props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null)};
	${props => (props.fill ? fill : null)};
	${props => (props.overflow ? overflow : null)};
	${props => (props.scroll ? scroll : null)};
	${props => (props.scrollX ? scrollX : null)};
	${props => (props.scrollY ? scrollY : null)};
	${props => (props.flexCenter ? flexCenter : null)};
	${props => (props.block ? 'flex-direction: row;flex-wrap: wrap; overflow-y: scroll;' : null)};
	${props => (props.border ? border(props.border, '1px solid #ccc') : null)};
	${props => (props.align ? textAlign('center') : null)};
	${props => (props.alignContainer ? m('0 auto') : null)};
	${props => (props.classList ? props.classList : {})};
`;
