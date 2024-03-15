<template>
	<nav class="nav-content" :class="{ 'black-color': isBlack }">
	  <img src="" alt="">
	  <ul class="list">
		<li :class="{ active: $route.name === 'accueil' }">
		  <router-link class="nav-link" :to="{ name: 'accueil' }">Accueil</router-link>
		</li>
		<li :class="{ active: $route.name === 'profil' }">
		  <router-link class="nav-link" :to="{ name: 'profil' }">Profil</router-link>
		</li>
		<li :class="{ active: $route.name === 'projets' || $route.name === 'design-id' || $route.name === 'web-id' || $route.name === 'web' || $route.name === 'design' }">
		  <router-link class="nav-link" :to="{ name: 'projets' }">Projets</router-link>
		</li>
		<li :class="{ active: $route.name === 'contact' }">
		  <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
		</li>
	  </ul>
	</nav>
  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const props = defineProps(['isBlack']);
const router = useRouter();
</script>

<style lang="scss">
.nav-content {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	transition: 0.3s ease-out;
	backdrop-filter: blur(8px) brightness(1.2);
	-webkit-backdrop-filter: blur(8px) brightness(1.2);
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	color: white;
	font-size: 16px;
	background-color: rgba(253, 253, 253, 0.5);
	mask-image: linear-gradient(black 70%, transparent);
	-webkit-mask-image: linear-gradient(black 70%, transparent);

	a {
		color: inherit;
		text-decoration: none;
		font-family: Helvetica, Verdana, sans-serif;
		font-weight: 400;
		font-style: normal;
		letter-spacing: 3px;
		font-size: 17px;
		color: black;
		margin-right: 1rem;

	}

	.list {
		list-style-type: none;
		margin-left: auto;
		display: none;
		
		

		@media (min-width: 640px) {
			display: flex;
		}

		li {
			
			width: 100%;
			padding: 16px 20px 30px 20px;

			&.active {
        background-color: rgba(238, 231, 231, 0.311);
      }
			
		&:hover,
		&:focus{
			background-color: rgba(238, 231, 231, 0.311);
		}
		}

		
	}
}


.black-color{
	background-color: rgba(47, 45, 45, 0.5);
	a{
		color: #fff;
	}
	.list li:hover,
	.list li.active,
  .list li:focus {
    background-color: rgba(62, 59, 59, 0.274);
  }
}

/* Media query pour les appareils mobiles */
@media screen and (max-width: 960px) {
	.nav-content {
		display: none;
	}
}
</style>
