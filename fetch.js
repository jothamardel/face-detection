const fetch = require('node-fetch');



const input = {  
   "inputs":[  
      {  
         "data":{  
            "image":{  
               "url":"https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/136720479_3798970063496267_2737608753882392149_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeEpH7SNoNcteyNIa2djbF6__jvDP-E1n6L-O8M_4TWfopKKwC8gYSJ4AKiJ_eWw6qegj6sW3QZy4rocjjCL_0n0&_nc_ohc=Tt9dLauuoHYAX87IBex&_nc_ht=scontent.fabb1-2.fna&oh=74bef777634ed64ddd4dd84be99114ce&oe=60FA7F52" // THIS IS WHERE YOUR IMAGE URL WILL GO
            }
         }
      }
   ]
}


fetch('https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs', {
	method: 'POST',
	headers: {
		"Authorization": "Key YOUR_API_KEY",
		"Content-Type": "application/json",
		"Key": "0124e25ee74f495f8d426b49219d797e"
	},
	body: JSON.stringify(input)
})
    .then(res => res.json())
    .then(data => console.log(data.outputs[0].data.regions[0].region_info));