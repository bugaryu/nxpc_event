let flag = 0;
let target = document.getElementById('prologue_anim');
const trigger = document.getElementById('nxpc_logo');
let nodes = [""];
let html = [""];
let anim_time = 1000;
let num = 0;
let about = document.getElementById('about');
let about_content = document.getElementById('about_content');
let info = document.getElementById('info');
let info_content = document.getElementById('info_content');
let performers = document.getElementById('performers');
let performers_content = document.getElementById('performers_content');
let default_content = document.getElementById('default_content');
let material = new Blotter.ChannelSplitMaterial();
let font_size;
trigger.addEventListener("animationend",function(){
	const loading = document.getElementById('loading');
	loading.classList.add('loaded');
	// opening();
	about_content.classList.remove('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.add('close_content');
	default_content.classList.add('close_content');
});


// if(window.innerWidth < 800) {
//  		//スマフォ
//  		font_size = 15;
//  		nodes = ['僕らがここにたどり着いた時','知らず知らずの間に','複雑に固く結ばれた','主張や個性や自由が','少しずつ解きほぐされ','やがてそれらが最高密度の色彩を帯び','リアルへ分散していく'];
// 	} else {
// 		//pc
// 		font_size = 30;
// 		nodes = ['僕らがここにたどり着いた時','知らず知らずの間に','複雑に固く結ばれた主張や個性や自由が','少しずつ解きほぐされ','やがてそれらが最高密度の色彩を帯び','リアルへ分散していく'];
//  }
about.addEventListener('click',function(){
	about_content.classList.remove('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.add('close_content');
	default_content.classList.add('close_content');
});
info.addEventListener('click',function(){
	about_content.classList.add('close_content');
	info_content.classList.remove('close_content');
	performers_content.classList.add('close_content');
	default_content.classList.add('close_content');
});

performers.addEventListener('click',function(){
	about_content.classList.add('close_content');
	info_content.classList.add('close_content');
	performers_content.classList.remove('close_content');
	default_content.classList.add('close_content');
});

// var mo = new MutationObserver(function(record,observer){
	

// 	material.uniforms.uOffset.value = 0.15;
// 	material.uniforms.uRotation.value = 30.0;
// 	material.uniforms.uApplyBlur.value = 1;
// 	material.uniforms.uAnimateNoise.value = 1;

// 	let blotter = new Blotter(material);

// 	let blotterElems = [...document.querySelectorAll('.blotter')];

// 	blotterElems.forEach((el) => {

// 	let text = new Blotter.Text(el.innerHTML,{
// 		family : "A1Gothic_M",
// 		size :`${font_size}`,
// 		fill : '#eee'
// 	});
	
	
// 	blotter.addText(text);

// 	//el.innerHTML = '';

// 	const scope = blotter.forText(text);

// 	scope.appendTo(el);

// 	});
// });

// var config = {
// 	childList : true
// };

// mo.observe(target, config);

// function opening(){
// 	//------------------------------------
// 	nodes.forEach((node)=>{
// 		let dataArray = node.split('').slice(0);
// 		html = dataArray.map((text,index) => {
// 			num += 1;
// 			anim_time += 70;
// 			return ` <span id="num_${num}" class="blotter" style="animation-delay: ${anim_time}ms;">${text}</span>`;
// 		});
// 		html.forEach((element) => {
// 			target.insertAdjacentHTML('beforeend',element);
// 		});
// 		target.insertAdjacentHTML('beforeend','<br>');
// 		anim_time += 500;
// 	});

//}



