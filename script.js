let html = "";

// const formatai = ['jpg', 'gif', 'png']

for (let i = 1; i <= 32; i++) {
  html += `<li>
          <a href="./img/img(${i}).jpg" target="_blank">
            <img src="./img/img(${i}).jpg" alt="image" />
          </a>
        </li>`;
}

html += "<li></li>";

document.getElementById("galerija").innerHTML = html;
