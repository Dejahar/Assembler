console.log("Hello");

const apiKey = "NZJSrYUrNu1QStHgQQFWD6HxmVWfRnMw";

const fetchAPI = fetch("https://api.giphy.com/v1/gifs/random?api_key=${apiKey}");

fetchAPI.then(function (response) {
    return response.json();
}).then(function (data) {
    const url = data.data.images.original.url;
    const title = data.data.title;

    const img = document.createElement("img");
    const text = document.createElement("h2");

    img.src = url;
    text.textContent = text;

    const imageContainer = document.getElementById("container-img");
    const textContainer = document.getElementById("container-title");

    imageContainer.append(img);
    textContainer.append(text);
})