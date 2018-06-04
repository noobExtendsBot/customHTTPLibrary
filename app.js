const http = new customHTTP;

//Get Users (to get the list of user)

// console.log(http.get('https://jsonplaceholder.typicode.com/users'));


const data = {
    name: "John Doe",
    username: "jdoe",
    email: "jdoe@gmail.com"
}

//PUT Request (to update a specified resource)

http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//PATCH Request (to update a specified resource)

http.patch('https://jsonplaceholder.typicode.com/users/3', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// POST Request (to add new users)

// http.post('https://jsonplaceholder.typicode.com/users/3', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// DELETE Request (to delete a particular resource)
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
