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

const getData = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url).then((response) =>
    response
      .json()
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        const imgdata = res.data.message;
        return imgdata;
      })
  );
};

function test() {
  let div = document.createElement("div");
  let p = document.createElement("p");
  div.append("Some text", p);

  console.log(div.childNodes);
}

function createContent() {
  const container = document.createElement("div");
  container.className = "container";
  const currentDiv = document.getElementsByClassName("wiki-item");
  container.appendChild(currentDiv);
  container.appendChild(currentDiv);

  container.appendChild(currentDiv);

  container.appendChild(currentDiv);

  container.appendChild(currentDiv);
}
const initializeCode = async () => {
  createContent();
};
