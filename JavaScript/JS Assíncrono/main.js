/*let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/cadcs');
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}


let minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/cadcs')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Err0 404')
                }
            }
        }
    })
}
minhaPromise()
*/


axios.get('https://api.github.com/users/cadcs')
 .then(function(response) {
    console.log(response)
 })
 .catch(function(error) {
    console.warn(error)
 })
