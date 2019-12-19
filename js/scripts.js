
function pages (){

	let content = document.getElementsByClassName('content')[0];
	  switch(window.location.hash.slice(1)){
		case 'team' :
		content.innerHTML=` 
			   <div class="team">
				<div class="person">
				  <div class="team_person_photo">
					<img src="img/igor.jpg" alt="Игорь">
				  </div>
				  <div class="team_person_info">
					<h2>Игорь</h2>
					<h4>Администратор</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur!</p>
				  </div>
				</div>
  
				<div class="person">
				  <div class="team_person_photo">
					<img src="img/jenyaA.jpg" alt="Женя">
				  </div>
				  <div class="team_person_info">
					<h2>Женя</h2>
					<h4>Администратор</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur!</p>
				  </div>
				</div>
  
				<div class="person">
				  <div class="team_person_photo">
					<img src="img/anna.jpg" alt="Аня">
				  </div>
				  <div class="team_person_info">
					<h2>Аня</h2>
					<h4>Старший Барбер</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur!</p>
				  </div>
				</div>
  
				<div class="person">
				  <div class="team_person_photo">
					<img src="img/jenya.jpg" alt="Женя">
				  </div>
				  <div class="team_person_info">
					<h2>Женя</h2>
					<h4>Барбер</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur!</p>
				  </div>
				</div>
  
				<div class="person">
				  <div class="team_person_photo">
					<img src="img/vika.png" alt="Вика">
				  </div>
				  <div class="team_person_info">
					<h2>Вика</h2>
					<h4>Барбер</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur!</p>
				  </div>
				</div>
  
				<div class="person">
				  <div class="team_person_photo">
					<img src="img/lesha.png" alt="Леша">
				  </div>
				  <div class="team_person_info">
					<h2>Леша</h2>
					<h4>Младший Барбер</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur!</p>
				  </div>
				</div>
  
				</div>`;
			break;
			case 'main' :
		content.innerHTML=`
  
				<div class="buttons"><a href="#price">Прайс-Лист</a> <a class="ms_booking" href="https://n226655.yclients.com/company:224130?o=m651737">Записаться</a></div>`;
			  
  
			break;
  
		default :
		content.innerHTML=`
		<div class="buttons"><a>Not found </a></div>
				`;
			break;
  
	  }
  
  }
  
  function createMenu() {
	let navigation = document.getElementsByTagName('ul')[0];
	let menu = [
	  {title:'главная', href:'#main'},
	  {title:'о нас', href:'#about'},
	  {title:'команда', href:'#team'},
	  {title:'прайс', href:'#price'},
	  {title:'акции', href:'#stocks'},
	  {title:'работы', href:'#works'},
	  {title:'награды', href:'#prizes'},
	  {title:'контакты', href:'#contacts'},
	];
  
	for (let key of menu) {
	  navigation.innerHTML+=`<li><a class="mainMenu" href="${key.href}">${key.title}</a></li>`
	}
  
  
  }
  
  function onActive(){
	  let list = document.getElementsByClassName('mainMenu');
	  let hash = window.location.hash;
	  for (let key of list) {
  
		if(hash == key.getAttribute('href')){
		  key.classList.add('active');
		}else {
		  key.classList.remove('active');
		}
  
	  }
	}
  
  function state(){
  
	let hash = window.location.hash;
	hash = (hash)?(hash):("#main");
  
	if (hash) window.location.hash = hash;
	pages();
	onActive();
  }
  
  
  function init() {
	let app = document.getElementsByTagName('header')[0];
	app.innerHTML =`<nav>
					<ul>
					</ul>
				  </nav>
				  <div class="logo "></div>
				  <div class='content'></div>`;
	state();
	createMenu();
  
	window.addEventListener('hashchange', state, false);
  }
  init();