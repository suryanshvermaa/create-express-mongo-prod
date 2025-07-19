import { Response } from "express";

export interface IRes {
	success: boolean;
	message: string;
	data: object;
}

/**
 * @description: response function to send response
 * @param res - express response object
 * @param status - http status code
 * @param message - response message
 * @param data - response data
 * @returns - express response object
 */
const response = (
	res: Response,
	status: number,
	message: string,
	data: object
) => {
	const resObj: IRes = {
		success: true,
		message,
		data: data,
	};
	return res.status(status).json(resObj);
};
export default response;
