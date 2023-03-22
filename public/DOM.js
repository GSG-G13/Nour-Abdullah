const apiKey = "b9da8a8928ade30c5680978edd9a4330";
const api = "https://api.themoviedb.org/3/movie/";

let boxSearch = document.querySelector(".search-input");
let input = document.querySelector(".search-input input");
let inputTop = document.querySelector(".top-section");
let popup = document.querySelector(".autocom-box");
let cardsContainer = document.querySelector(".cards");
let completeBox = document.querySelector(".autocom-box");

const getData = (url, cb) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const dataObj = JSON.parse(xhr.responseText);
      const results = dataObj.results;
      cb(results);
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
};

const renderPopup = (arr) => {
  completeBox.textContent = "";
  arr.slice(0, 5).forEach((object) => {
    const comBox = document.createElement("div");
    comBox.classList.add("popup");

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-film";

    comBox.appendChild(icon);
    comBox.textContent = `${object.title}`;
    completeBox.appendChild(comBox);

    comBox.addEventListener("click", () => {
      getData(api + `now_playing?api_key=${apiKey}`, (result) => {
        let res = [];
        result.forEach((obj) => {
          if (obj.title.includes(comBox.textContent)) {
            res.push(obj);
          }
        });
        renderCards(res);
      });
    });
  });
};

const renderCards = (arr) => {
  cardsContainer.textContent = "";
  arr.forEach((object) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${object.poster_path}`;
    img.alt = `${object.poster_path}`;

    const title = document.createElement("h4");
    title.classList.add("title");
    let completetitle = object.title;
    title.textContent = completetitle.split(":").slice(0, 1);

    const discription = document.createElement("div");
    discription.classList.add("desc");
    let completeDisc = object.overview;
    discription.textContent = `${completeDisc.slice(0, 25)} ...`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(discription);
    cardsContainer.appendChild(card);
  });
};

getData(api + `now_playing?api_key=${apiKey}`, (result) => {
  renderCards(result);
});

input.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    getData(api + `now_playing?api_key=${apiKey}`, (result) => {
      renderCards(result);
    });
  } else {
    getData(
      api.replace("movie/", "search") +
        `/movie?api_key=${apiKey}&query=${e.target.value}&page=1`,
      (result) => {
        renderPopup(result);
      }
    );
  }
});

input.addEventListener("focus", () => {
  inputTop.classList.toggle("focus");
  popup.classList.toggle("close");
});

input.addEventListener("blur", () => {
  inputTop.classList.toggle("focus");
});

boxSearch.addEventListener("mouseleave", () => {
  popup.classList.toggle("close");
});
