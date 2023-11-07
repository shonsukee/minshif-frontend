import client from "../client-development";

const GetLogin = async () => {
	try {
		const response = await client.get("/api/v1/sign_up");
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export default GetLogin;