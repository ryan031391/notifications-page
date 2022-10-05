import data from "./data.js";

const Show = document.querySelector(".showPosts");
const unread = document.querySelector(".badge");
const containPost = document.querySelectorAll(".post-container");
let outpost = "";

function countRead() {
  let count = 0;
  data.forEach((element) => {
    if (element.read === false) {
      count++;
    }
  });
  unread.textContent = count;
}

data.forEach((element) => {
  if (element.read === false) {
    outpost += '<div class="post-container grey">';
  } else {
    outpost += '<div class="post-container">';
  }

  outpost += '<div class="post-container-left">';
  outpost +=
    '<img class="avatar" alt="avatar image" src="' + element.avatar + '">';
  outpost += "</div>";
  outpost += '<div class="post-container-right">';
  outpost += '<p class="info">';
  outpost += '<span class="name">' + element.name + "</span>";
  outpost += '<span class="action">' + element.action + "</span>";
  if (element.post.length > 0) {
    outpost += '<span class="post">' + element.post + "</span>";
  }
  if (element.group.length > 0) {
    outpost += '<span class="group">' + element.group + "</span>";
  }
  if (element.read === false) {
    outpost +=
      '<span class="read-mark"><svg height="10" width="10"><circle cx="5" cy="5" r="4" fill="red" /></svg></span>';
  }
  outpost += "</p>";
  outpost += '<p class="time">' + element.time + "</p>";
  outpost += "</div>";

  if (element.picture.length > 0) {
    outpost += '<div class="image">';
    outpost +=
      '<img class="image" alt="post image" src="' + element.picture + '">';
    outpost += "</div>";
  }
  outpost += "</div>";

  if (element.message.length > 0) {
    outpost += '<div class="message">';
    outpost += '<p class="message-content">' + element.message + "</p>";
    outpost += "</div>";
  }
});

Show.innerHTML = outpost;
countRead();

for (let i = 0; i < containPost.length; i++) {
  if (data[i].read === true) {
    containPost[i].classList.add("grey");
  }
}

function allRead() {
  const read = document.querySelectorAll(".read-mark");
  read.forEach((element) => {
    element.classList.add("no-vue");
  });
  const containPost = document.querySelectorAll(".post-container");
  for (let i = 0; i < containPost.length; i++) {
    if (data[i].read === false) {
      containPost[i].classList.remove("grey");
      containPost[i].classList.add("white");
    }
  }
  unread.textContent = "0";
}

const mark = document.querySelector(".like-link");

mark.addEventListener("click", allRead);
