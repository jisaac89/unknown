import { IRecoilBaseProps } from '../../index';

export interface ILayerProps extends IRecoilBaseProps {
	hide?: boolean;
	block?: boolean;
	overflow?: boolean;
	dimensions?: [string, string, number];
	scroll?: boolean;
	scrollX?: boolean;
	scrollY?: boolean;
	flexCenter?: boolean;
	classList?: object[];
	fill?: number;
	style?: object;
	border?: 'bottom';
	onClick?: any;
	scrollIf?: boolean;
	scrollToId?: string;
	align?: 'center';
	alignContainer?: 'center';
}
