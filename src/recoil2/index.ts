export type RecoilKind =
	| 'primary'
	| 'success'
	| 'error'
	| 'bronze'
	| 'silver'
	| 'gold'
	| 'default'
	| 'light'
	| 'night'
	| 'dark';

export interface ShouldBeBoolean {
	fill?: number;
	checked?: number;
	outline?: number;
	simple?: number;
}

export type RecoilSize = 'small' | 'large' | 'xlarge' | 'xxlarge' | 'default';
export type RecoilFlex = 'row' | 'row-reverse' | 'column' | 'coumn-reverse';
export type RecoilJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type RecoilElement = React.ReactNode;

export interface IRecoilBaseProps extends ShouldBeBoolean {
	size?: RecoilSize;
	kind?: RecoilKind;
	flex?: RecoilFlex;
	className?: string;
	id?: string;
	children?: RecoilElement;
	tabIndex?: number;
	disabled?: boolean;
	loading?: boolean;
}
