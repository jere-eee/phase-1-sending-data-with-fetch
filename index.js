// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}

fetch('http://localhost:3000/dogs', configurationObject)
  .then(res => res.json())
  .then(obj => console.log(obj))

function submitData(username, useremail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: username, email: useremail})
    })
        .then(res => res.json())
        .then((data) => {
            document.querySelector('body').append(data.id)
        })
        .catch((err) => {
            alert('Error: Wrong execution.');
            document.querySelector('body').append(err.message)
        })
}