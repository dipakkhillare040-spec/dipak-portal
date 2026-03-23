const schemes = [
  "PM Kisan Yojana",
  "Ayushman Bharat",
  "PM Awas Yojana",
  "Digital India Scheme"
];

const list = document.getElementById("scheme-list");

schemes.forEach(scheme => {
  const div = document.createElement("div");
  div.innerText = scheme;
  div.style.padding = "10px";
  list.appendChild(div);
});