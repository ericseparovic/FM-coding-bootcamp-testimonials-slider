/** @format */
const buttonPrev = document.querySelector("#button_prev");
const buttonNext = document.querySelector("#button_next");
const button = document.querySelector(".button");
const containerCite = document.querySelector(".container__cite");
const imageProfil = document.querySelector(".box_image_perfil");
const profiles = [
	{
		name: "Tanya Sinclair",
		profession: "UX Engineer",
		imagen: "/images/image-tanya.jpg",
		description: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enoug I’m now in the job of my dreams and so excited about the future. ”`,
		id: 0,
	},
	{
		name: "John Tarkpor Junior",
		profession: "Front-end Developer",
		imagen: "/images/image-john.jpg",
		description: `“If you want tolay the best foundation possible I’d recommend taking this course. The depththe instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
		id: 1,
	},
];

button.addEventListener("click", showProfile);
window.addEventListener("DOMContentLoaded", showProfile);

function showProfile(e) {
	const event = e.target.id;

	if (event === undefined) {
		let id = 0;
		carrusel(id, event);
		return;
	}

	let id = parseInt(e.target.parentElement.parentElement.querySelector("img").id);

	if (event === "button_next") {
		carrusel(id, event);
	}

	if (event === "button_prev") {
		carrusel(id, event);
	}
}

function carrusel(id, event) {
	htmlBlockquote = "";
	htmlImage = "";

	if (event === undefined) {
		htmlBlockquote = `
		<section>
			<blockquote>
				${profiles[id].description}
			</blockquote>
			<cite>${profiles[id].name} <span>${profiles[id].profession}</span></cite>
		</section>
		`;

		htmlImage = `<img class="image_perfil" id="${profiles[id].id}" src="${profiles[id].imagen}" alt="" />`;

		containerCite.innerHTML = htmlBlockquote;
		imageProfil.innerHTML = htmlImage;

		return;
	}

	if (event === "button_next" && id < profiles.length - 1) {
		id++;
		htmlBlockquote = `
		<section>
			<blockquote>
				${profiles[id].description}
			</blockquote>
			<cite>${profiles[id].name} <span>${profiles[id].profession}</span></cite>
		</section>
		`;

		htmlImage = `<img class="image_perfil" id="${profiles[id].id}" src="${profiles[id].imagen}" alt="" />`;

		containerCite.innerHTML = htmlBlockquote;
		imageProfil.innerHTML = htmlImage;

		return;
	} else if (event === "button_prev" && id > 0) {
		id--;
		htmlBlockquote = `
		<section>
			<blockquote>
				${profiles[id].description}
			</blockquote>
			<cite>${profiles[id].name} <span>${profiles[id].profession}</span></cite>
		</section>
		`;

		htmlImage = `<img class="image_perfil" id="${profiles[id].id}" src="${profiles[id].imagen}" alt="" />`;

		containerCite.innerHTML = htmlBlockquote;
		imageProfil.innerHTML = htmlImage;
		return;
	}
}
