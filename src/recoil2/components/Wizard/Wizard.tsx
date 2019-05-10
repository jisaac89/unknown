import React, { Children } from 'react';
import styled from 'styled-components';
import { Layer } from '../Layer/Layer';
import { IWizardProps } from './IWizard';

interface IWizardSlideProps {
	visible: boolean;
}

const Wizard = (props: IWizardProps) => {
	const childrenGreaterThanOne = props.children.length > 1;

	const createSlidesPartial = (item: Array<any>, index: string | number) => {
		const selected = props.slideIndex === index;
		return (
			<WizardSlide visible={selected} key={index}>
				{item}
			</WizardSlide>
		);
	};

	return (
		<Layer fill={1} style={props.style}>
			{childrenGreaterThanOne ? (
				<WizardTrack>{Children.map(props.children, createSlidesPartial)}</WizardTrack>
			) : (
				props.children
			)}
		</Layer>
	);
};

const WizardTrack = styled.div<IWizardProps>`
	height: 100%;
	flex: 1;
`;
const WizardSlide = styled.div<IWizardSlideProps>`
	height: 100%;
	flex: 1;
	${props => (props.visible ? 'display:block' : 'display:none')};
`;

export { Wizard };
