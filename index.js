const accessKey = 'ba-IU1N2m95uRG2flbXenmcREyDJEyJJNlOdXFV60cY';
let query = "spring"
let url =
  `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${accessKey}&per_page=24`;
let data;
function show_data(data) {
  let img = document.createElement("img");
  let div = document.querySelector(".aaaa");
  let p = document.createElement("p")
  let img1 = document.createElement("img")
  let div1 = document.createElement("div")
  let div2 = document.createElement("div")
  div1.append(p, img1)
  div2.append(img, div1)
  div.append(div2);
  img.setAttribute("src", data.urls.small);
  p.innerText = data.likes
  img1.setAttribute("src","heart.png")
  div1.classList.add("bbbb")
}
async function get_data() {
  let wait = await fetch(url);
  data = await wait.json();
  await console.log(data.results);

  data.results.forEach((photo) => {
    show_data(photo);
  });
}
get_data();
