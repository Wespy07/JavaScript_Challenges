// USING FETCH

fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((usersData) => {
        console.log("The user's id is: ", usersData.users[0].id)
        return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)
    })
    .then((res) => res.json())
    .then((postsData) => {
        console.log("That user's post id is: ", postsData.posts[0].id)
        return fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
    })
    .then((res) => res.json())
    .then((commentsData) => {
        console.log("That user's post id is: ", commentsData.comments[0].user.id)
        return fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
    })
    .then((res) => res.json())
    .then((commentsUserData) => {
        console.log("That user's post id is: ", commentsUserData.age)
    })
    .catch((err) => {console.log('The error is: ', err);
    })