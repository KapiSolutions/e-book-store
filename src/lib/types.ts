export interface ButtonProps {
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'cta';
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	loading?: boolean;
	pulsing?: boolean;
}

export interface Product {
	title: string;
	price: number;
	priceOld: number;
	imageUrl: string;
	buyUrl: string;
	description: string;
}

export interface Order {
	id: string;
	client: {
		name: string;
		email: string;
	};
	docName: string;
	finalDocName: string;
	coverPages: Array<number>;
	paymentIntent: string;
	amountTotal: number;
	created: number;
}
