function convertSize(bytes) {
  let kBytes = bytes / 1024.0;
  let mBytes = kBytes / 1024.0;

  return mBytes.toFixed(2);
}

function previewFiles() {
  const preview = document.querySelector("ul");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const li = document.createElement("li");
          li.classList.add("images-list__item");

          const header = document.createElement("header");
          header.classList.add("images-list__item-name");
          header.innerText = file.name;

          const footer = document.createElement("footer");
          footer.classList.add("images-list__item-size");
          footer.innerText = `${convertSize(file.size)} MB`;

          const image = new Image();
          image.title = file.name;
          image.src = reader.result;
          image.classList.add("images-list__item-img");

          li.appendChild(header);
          li.appendChild(image);
          li.appendChild(footer);

          preview.appendChild(li);
        },
        false
      );

      reader.readAsDataURL(file);
    } else {
      alert("Wybrany plik nie jest obrazem");
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("input[type=file]");
picker.addEventListener("change", previewFiles);
