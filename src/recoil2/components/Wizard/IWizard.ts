export interface IWizardProps {
	slideIndex?: number;
	children?: any;
	style?: object;
	onSlide?(slideIndex: number): void;
}
