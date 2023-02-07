const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let firstPost = document.getElementById("post-vangogh");
let thirdPost = document.getElementById("post-ducreux");
let secondPost = document.getElementById("post-courbet");

let courbetLikes = document.getElementById("courbet-likes");
let vangoghLikes = document.getElementById("vangogh-likes");
let ducreuxLikes = document.getElementById("ducreux-likes");

function render() {
    vangoghLikes.innerHTML = `${posts[0].likes} Likes`
    courbetLikes.innerHTML = `${posts[1].likes} Likes`
    ducreuxLikes.innerHTML = `${posts[2].likes} Likes`
}
render();

firstPost.addEventListener("dblclick", function () {
    posts[0].likes += 1;
    render();
})
secondPost.addEventListener("dblclick", function () {
    posts[1].likes += 1;
    render();
})
thirdPost.addEventListener("dblclick", function () {
    posts[2].likes += 1;
    render();
})


