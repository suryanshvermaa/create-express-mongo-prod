/**
 * Sends a standardized JSON response.
 *
 * @param {import("express").Response} res - The response object from Express.
 * @param {number} status - The HTTP status code for the response.
 * @param {string} message - A message describing the response.
 * @param {*} data - The data to include in the response body.
 * @returns {object} - The JSON response object.{success: boolean, message: string, data: *}.
 */
const response = (res, status, message, data) => {
	const resObj = {
		success: true,
		message,
		data: data,
	};
	return res.status(status).json(resObj);
};
export default response;
