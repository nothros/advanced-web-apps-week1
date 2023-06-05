import "./styles.css";

if (document.readyState !== "loading") {
  console.log("DOCUMENT READY");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOCUMENT NOT READY");
    initializeCode();
  });
}

const getData = async (breedname) => {
  const url = `https://dog.ceo/api/breed/${breedname}/images/random`;
  const response = await fetch(url);
const json = await response.json();
console.log(json.message);

return json.message;
};

const getWiki = async (breedname) => {
const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${breedname}?redirect=true"`;
const response = await fetch(url);
const json = await response.json();
console.log(json.extract);
return json.extract

}



const createWikiItem = (picture, breed, info) => {
  const wikiItem = document.createElement("div");

  wikiItem.className = "wiki-item";
  const wikiHeader = document.createElement("h1");
  wikiHeader.className = "wiki-header";
  wikiHeader.textContent =breed;
  wikiItem.appendChild(wikiHeader);

  const wikiContent = document.createElement("div");
  wikiContent.className = "wiki-content";

  const wikiText = document.createElement("p");
  wikiText.className = "wiki-text";
  wikiText.textContent = info;

  wikiContent.appendChild(wikiText);

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const wikiImg= document.createElement("img");
  wikiImg.className = "wiki-img";
  wikiImg.src = picture;
  
  imgContainer.appendChild(wikiImg);

  wikiContent.appendChild(imgContainer);
  wikiItem.appendChild(wikiContent);




  return wikiItem;
}

const createContent = async () =>  {
  const breeds = ["Husky", "Kelpie", "Beagle", "Borzoi", "Malamute"]
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  for (let index = 0; index < 5; index++) {
    
    const breed = breeds[index];
    const info = await getWiki(breed)
    const picture = await getData(breed.toLowerCase());
    
    console.log("TESTI", breed, picture)
    container.appendChild(createWikiItem(picture, breed, info));
  }

}
const initializeCode = async () => {
  createContent();
};
