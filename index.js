const { ClarifaiStub, grpc } = require('clarifai-nodejs-grpc');

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();

metadata.set("authorization", "Key YOUR_API_KEY");


stub.PostModelOutputs(
	{
		model_id: "f76196b43bbd45c99b4f3cd8e8b40a8a",
		inputs:[{ data: {image: {url: "https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/136720479_3798970063496267_2737608753882392149_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeEpH7SNoNcteyNIa2djbF6__jvDP-E1n6L-O8M_4TWfopKKwC8gYSJ4AKiJ_eWw6qegj6sW3QZy4rocjjCL_0n0&_nc_ohc=Tt9dLauuoHYAX87IBex&_nc_ht=scontent.fabb1-2.fna&oh=74bef777634ed64ddd4dd84be99114ce&oe=60FA7F52"}}}]
	},
	metadata,
	(err, response) => {
		if (err) {
			console.log("Error: " + err);
			return;
		}

		if (response.status.code !== 10000) {
			console.log("Recieved failed status: " + response.status.description + "\n" + response.status.details);
			return;
		}
		console.log("Predicted concepts, with confidence values:");
		console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
	}
)