import client from "../client-development";

const PostSignUp = async () => {
	try {
		const response = await client.get("/sign_up");
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export default PostSignUp;