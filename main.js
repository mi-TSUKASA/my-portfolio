const twitter = document.getElementById("twitter");
const college = document.getElementById("college");
const goodAt = document.getElementById("goodAt");
const hobby = document.getElementById("hobby");
const good = document.getElementById("good");
const goodText = document.getElementById("good-text");

twitter.onclick = function () {
  location.href = "https://twitter.com/TSUKASA_MIYAKE";
};

college.onclick = function () {
  location.href = "https://www.kaiyodai.ac.jp/";
};

goodAt.onclick = function () {
  location.href =
    "https://twitter.com/TSUKASA_MIYAKE/status/1431963884051595271";
};

hobby.onclick = function () {
  location.href = "https://www.youtube.com/channel/UCZZ0UGjWsRdM8_5bsqtxYaQ";
};

good.onclick = function () {
  goodText.textContent = "👍";
};
