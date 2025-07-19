declare namespace Express {
	export interface Request {
		user?: {
			userId: string | number;
			email?: string;
			data?: object;
		};
	}
}
