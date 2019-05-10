import * as React from 'react';
import useMedia from 'use-media';
import { ILayerProps } from './ILayer';
import { LayerWrapper } from './style';

const Layer = (props: ILayerProps) => {
	const isMobile = useMedia({ maxWidth: 600 });
	return !props.hide ? (
		<LayerWrapper {...props} onClick={props.onClick} disabled={!props.onClick ? true : false}>
			{props.children}
		</LayerWrapper>
	) : null;
};

export { Layer };
