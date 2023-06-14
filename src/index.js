import "./styles.css";

const fetchData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

const makeElement = (element, className, content) => {
  const webElement = document.createElement(element);
  webElement.className = className;
  if (element === "img") {
    webElement.src = content;
  }
  if (element === "p" || element === "h1") {
    webElement.textContent = content;
  }

  return webElement;
};

const createWikiItem = (picture, breed, info) => {
  const wikiItem = makeElement("div", "wiki-item");
  const wikiHeader = makeElement("h1", "wiki-header", breed);
  wikiItem.appendChild(wikiHeader);

  const wikiContent = makeElement("div", "wiki-content");
  const wikiText = makeElement("p", "wiki-text", info);

  const imgContainer = makeElement("div", "img-container");

  const wikiImg = makeElement("img", "wiki-img", picture);

  wikiItem.appendChild(wikiContent);
  imgContainer.appendChild(wikiImg);
  wikiContent.appendChild(imgContainer);
  wikiContent.appendChild(wikiText);

  return wikiItem;
};

const createContent = async () => {
  const breeds = ["Husky", "Kelpie", "Beagle", "Borzoi", "Malamute"];
  const container = makeElement("div", "container");
  document.body.appendChild(container);

  for (let index = 0; index < 5; index++) {
    const breed = breeds[index];

    const wikiURL = `https://en.wikipedia.org/api/rest_v1/page/summary/${breed}?redirect=true"`;
    const picURL = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`;

    const info = await fetchData(wikiURL);
    const picture = await fetchData(picURL);

    container.appendChild(createWikiItem(picture.message, breed, info.extract));
  }
};
const initializeCode = async () => {
  createContent();
};

if (document.readyState !== "loading") {
  console.log("DOCUMENT READY");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOCUMENT NOT READY");
    initializeCode();
  });
}

