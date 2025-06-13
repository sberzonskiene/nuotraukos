const fotoData = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg','8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg','16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg']

let HTML1 = '';

//const formatai = ['jpg', 'png', 'webp'];

for (const item of fotoData) {
    HTML1 += `

            <li>
                <a href="./pic/${item}" target="blank">
                <img src="./pic/${item}" alt="pic-foto">
                </a>
            </li>`;
}

const HTML = `
    <header>
        <h1>Galerija</h1>
    </header>
    <main>
        <ul class="ulflex" id="galerija">
        ${HTML1}
        </ul>    
    </main>
    <footer>
        <p>&copy;2025 SB</p>
    </footer>`;

document.getElementById('app').insertAdjacentHTML('beforeend', HTML);