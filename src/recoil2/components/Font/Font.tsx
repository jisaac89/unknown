import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';
import { FontStyle, Strike } from './style/Index';

export interface IFontProps {
	variant?: 'h0' | 'h1' | 'h2' | 'h3';
	children?: any;
	align?: 'center';
	decoration?: 'strike';
	style?: {};
	color?: string;
	className?: string;
}

const Font: FunctionComponent<IFontProps> = (props: IFontProps) => {
	const fontStike = props.decoration === 'strike' ? <Strike /> : null;

	if (props.variant === 'h0') {
		return (
			<h1
				className={'h0 ' + props.className}
				style={{
					textAlign: props.align,
					display: fontStike ? 'inline-block' : 'block',
					position: 'relative',
					...props.style
				}}>
				<FontStyle color={props.color} style={{ position: 'relative' }}>
					{props.children} {fontStike}
				</FontStyle>
			</h1>
		);
	}

	if (props.variant === 'h1') {
		return (
			<h1 className={props.className} style={{ textAlign: props.align, ...props.style }}>
				<FontStyle color={props.color} style={{ position: 'relative' }}>
					{props.children} {fontStike}
				</FontStyle>
			</h1>
		);
	}

	if (props.variant === 'h2') {
		return (
			<h2 className={props.className} style={{ textAlign: props.align }}>
				<FontStyle color={props.color} style={{ position: 'relative' }}>
					{props.children} {fontStike}
				</FontStyle>
			</h2>
		);
	}

	if (props.variant === 'h3') {
		return (
			<h3 className={props.className} style={{ textAlign: props.align }}>
				{props.children} {fontStike}
			</h3>
		);
	}

	return (
		<p className={props.className} style={{ textAlign: props.align, ...props.style }}>
			<FontStyle color={props.color} style={{ position: 'relative' }}>
				{props.children} {fontStike}
			</FontStyle>
		</p>
	);
};

export { Font };
