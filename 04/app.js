document.addEventListener("DOMContentLoaded", init);

function init() {
  const boxElement = document.querySelector(".box");
  const inputColor = document.querySelector("input[type=color]");
  const inputRange = document.querySelector("input[type=range]");

  let color = "#000000";
  inputColor.value = "#000000";

  inputColor.addEventListener("input", () => {
    color = inputColor.value;
    setBoxShadow(boxElement, color);
  });

  inputRange.addEventListener("input", () => {
    let range = inputRange.value / 100.0;
    setBoxShadow(boxElement, color, range);
  });

  setBoxShadow(boxElement, color);
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")},
        ${getChannelColor(colorInHex, "green")},
        ${getChannelColor(colorInHex, "blue")},
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case "red":
      start = 1;
      break;
    case "green":
      start = 3;
      break;
    case "blue":
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}
