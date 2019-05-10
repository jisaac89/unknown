import styled from 'styled-components';
import { IFontProps } from '../Font';

export const Strike = styled.span<IFontProps>`
	width: 100%;
	height: 1px;
	background: red;
	position: absolute;
	margin: auto;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;

export const FontStyle = styled.span<IFontProps>`
	${props => (props.color ? 'color:' + props.color : 'color: white;')};
`;
