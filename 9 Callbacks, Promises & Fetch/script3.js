// LETS FIX CALLBACK HELL
console.log('Wokring on fixing callback hell...');

function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    const myPromise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response)
        })
        
        xhr.addEventListener('error', () => {
            reject('This is an error message because the promise was rejected.')
        })
    })

    xhr.open(method, url)
    xhr.send();

    return myPromise
}


makeHttpRequest('GET', 'https://dummyjson.com/users')
    .then((usersData) => {
        console.log("The user's id is: ", usersData.users[0].id);
        return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`)
    }).then((postsData) => {
        console.log("That user's post id is: ", postsData.posts[0].id);
        return makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
    }).then((commentsData) => {
        console.log("That post's comment id is: ", commentsData.comments[0].user.id);
        return makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
    }).then((commentsUserData) => {
        console.log("That commenter's age is: ", commentsUserData.age);
    }).catch((err) => {
        console.log(err);
    })