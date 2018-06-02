/* 
    custom HTTP Library
    v1.0.0
*/


class customHTTP {


    // Make an HTTP GET Request
    get(url) {
        return new Promise(function(resolve, reject){
            fetch(url)
            .then(res => res.json())
            .then((data) => resolve(data))
            .catch(err => reject(err));
        });
    }


    // Make a HTTP POST Request
    post(url, data) {
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((data) => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make a HTTP PUT Request
    put(url, data) {

        return new Promise(function(resolve, reject){
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make a HTTP DELETE Request
    delete(url) {
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then((data) => resolve("Item deleted"))
            .catch(err => reject(err));
        });
    }
} 
