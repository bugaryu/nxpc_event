const trigger = document.getElementById('nxpc_logo');

const title_logo = document.getElementById('title_logo');
const bgimg = document.getElementById('bgimg');

let about = document.getElementById('about');
let about_content = document.getElementById('about_content');
let info = document.getElementById('info');
let info_content = document.getElementById('info_content');
let performers = document.getElementById('performers');
let performers_content = document.getElementById('performers_content');
// let default_content = document.getElementById('default_content');
// let material = new Blotter.ChannelSplitMaterial();

trigger.addEventListener("animationend", function () {
	const loading = document.getElementById('loading');
	loading.classList.add('loaded');
	// opening();
	about_content.classList.add('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.add('close_content');
	// default_content.classList.add('close_content');
});

title_logo.addEventListener('click', function () {
	about_content.classList.add('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.add('close_content');
	// default_content.classList.add('close_content');
	bgimg.classList.remove('bgimg-blur');
});

about.addEventListener('click', function () {
	about_content.classList.remove('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.add('close_content');
	// default_content.classList.add('close_content');
	bgimg.classList.add('bgimg-blur');
});

info.addEventListener('click', function () {
	about_content.classList.add('close_content');
	info_content.classList.remove('close_content');
	performers_content.classList.add('close_content');
	// default_content.classList.add('close_content');
	bgimg.classList.add('bgimg-blur');
});

performers.addEventListener('click', function () {
	about_content.classList.add('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.remove('close_content');
	// default_content.classList.add('close_content');
	bgimg.classList.add('bgimg-blur');
});

