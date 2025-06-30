function saveImage() {
  const input = document.getElementById("imageInput");
  if (input.files.length === 0) return;

  const reader = new FileReader();
  reader.onload = function () {
    let gallery = JSON.parse(localStorage.getItem("gallery")) || [];
    gallery.push(reader.result);
    localStorage.setItem("gallery", JSON.stringify(gallery));
    alert("Gambar disimpan!");
  };
  reader.readAsDataURL(input.files[0]);
}

function loadGallery() {
  const gallery = JSON.parse(localStorage.getItem("gallery")) || [];
  const container = document.getElementById("gallery");
  gallery.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.width = 200;
    container.appendChild(img);
  });
}

if (location.pathname.includes("gallery.html")) {
  loadGallery();
}
