export interface ButtonProps {
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'cta';
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	loading?: boolean;
}
