// CALLBACK HELL

function makeHttpRequest(method, url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.addEventListener('load', () => {
        callback(xhr.response)
    })

    xhr.open(method, url)
    xhr.send();
}

// calling the function on users to get posts then calling the function on posts to get comments, below is an example of CALLBACK HELL!!!!!
// api => users => posts => comments => commentsUserData

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
    console.log(usersData.users[0].id);
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
        console.log(postsData.posts[0].id);
        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
            console.log(commentsData.comments[0].user.id);
            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (commentsUserData) => {
                console.log(commentsUserData);
            })
        })
    })
});