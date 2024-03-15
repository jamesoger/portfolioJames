<template>
  <div class="home">
    <div class="nav-mobile" :class="{ 'nav-opened': isNavOpen }">
      <NavMobile v-if="isNavOpen" @close-nav="closeNav" />
    </div>
    <label for="check">
      <input type="checkbox" id="check" @click="toggleNav" :class="{ 'nav-opened': isNavOpen }" />
      <span></span>
      <span></span>
      <span></span>
    </label>

    <div class="title" @click="navigateToPortfolio()">
      <h1>James Oger</h1>
      <span>Portfolio</span>
    </div>
    <div class="cercle"></div>



    <video autoplay muted loop class="background-video">
      <source src="/videos/pexels-rostislav-uzunov-7670835 (2160p).mp4" type="video/mp4">
      Votre navigateur ne prend pas en charge la balise vidéo.
    </video>
    <div class="titles">
      <h1 class="home-title" :class="{ rotated: showText }" @mouseover="showProfileText" @mouseleave="hideProfileText">
        <span v-if="!showText">Bonjour</span>
        <router-link v-if="showText" to="profil" class="profile-link">
          <span>Profil</span>
        </router-link>
      </h1>
      <h2 :class="{ rotated: showIamText }" @mouseover="startIamText" @mouseleave="hideIamText">
        <span v-if="!showIamText">Je suis</span>
        <router-link v-if="showIamText" to="projets" class="work-link">
          <span>Projets</span>
        </router-link>
      </h2>
      <h3 :class="{ rotated: showJamesText }" @mouseover="startJamesText" @mouseleave="hideJamesText">
        <span v-if="!showJamesText">James</span>
        <router-link v-if="showJamesText" to="contact" class="contact-link">
          <span>Contact</span>
        </router-link>
      </h3>
    </div>

    <div class="banner-vue">
      <BannerVue />
    </div>


  </div>
</template>

<script>

import BannerVue from '@/components/ContactBanner.vue';
import NavMobile from '@/components/NavMobile.vue';

export default {
  data() {
    return {
      showText: false,
      showIamText: false,
      showJamesText: false,
      isNavOpen: false,

    };
  },
  components: {
    BannerVue,
    NavMobile
  },
  methods: {
    showProfileText() {
      this.showText = true;
    },
    hideProfileText() {
      this.showText = false;
    },
    startIamText() {
      this.showIamText = true;
    },
    hideIamText() {
      this.showIamText = false;
    },
    startJamesText() {
      this.showJamesText = true;
    },
    hideJamesText() {
      this.showJamesText = false;
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
    navigateToPortfolio() {
      this.$router.push({ name: 'projets' });
    }

  },

};
</script>

<style lang=scss>
.home {
  .title {
    display: none;
  }

  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }


  .home-title {
    margin-left: 1rem;
    position: fixed;
    top: 30%;
    left: 17%;
    transform: translate(-42%, -50%);
    font-size: 7vw;
    font-weight: bolder;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    filter: drop-shadow(0px 0px 5px white);
    color: white;
    z-index: 2;
    transition: opacity 0.5s ease-in-out;
  }

  h2 {
    margin-left: 1rem;
    position: fixed;
    top: 51%;
    left: 17%;
    transform: translate(-50%, -50%);
    font-size: 7vw;
    font-weight: bolder;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: rgb(254, 5, 5);
    z-index: 2;
    transition: opacity 0.5s ease-in-out;
  }

  h2:hover,
  h3:hover,
  .home-title:hover {
    left: 19%;
    transform: translateX(5px);
    transition: left 0.5s ease-in-out, transform 0.5s ease-in-out;
  }



  h3 {
    margin-left: 1rem;
    position: fixed;
    top: 71%;
    left: 17%;
    transform: translate(-54%, -50%);
    font-size: 7vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: rgb(254, 5, 5);
    z-index: 2;
    transition: opacity 0.5s ease-in-out;
  }

  .home-title span {
    display: inline-block;
    opacity: 1;
  }

  .profile-link {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    filter: drop-shadow(0px 0px 2px white);
    color: white;
    z-index: 2;
  }

  .work-link {
    position: fixed;
    text-decoration: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7vw;
    font-family: 'Montserrat', sans-serif;

    color: rgb(254, 5, 5);
    z-index: 2;
  }

  .contact-link {
    position: fixed;
    text-decoration: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 7vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: rgb(254, 5, 5);
    z-index: 2;
  }

  .home-title.rotated span:first-child {
    opacity: 0;
  }

  .home-title.rotated span:last-child {
    opacity: 1;
  }

  h2.rotated span:first-child {
    opacity: 0;
  }

  h2.rotated span:last-child {
    opacity: 1;
  }

  h3.rotated span:first-child {
    opacity: 0;
  }

  h3.rotated span:last-child {
    opacity: 1;
  }

}

@keyframes rotateCercle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}



/* Media query for small laptops */
@media screen and (max-width: 960px) {
  .home {
    width: 100vw;
    height: 100vh;
    background-image: url("/images/pexels-adrien-olichon-2387793.jpg");
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


    .title {
      text-align: center;
      padding-top: 0;
      font-family: "Bebas Neue", sans-serif;
      font-size: 32px;
      font-weight: 400;
      font-style: normal;
      position: absolute;
      display: block;
      z-index: 1;
      cursor: pointer;

      h1 {
        color: #fff;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 52px;
        letter-spacing: 7px;

      }

      span {
        color: white;
        letter-spacing: 30px;
        margin-left: 200px;

      }
    }

    .cercle {
      width: 350px;
      height: 350px;
      border-radius: 50%;
      background-color: #0f0f0f;
      display: flex;
      position: relative;
      box-shadow:
        inset -10px -10px 20px rgba(0, 0, 0, 0.5),
        inset 10px 10px 20px rgba(255, 255, 255, 0.2),
        inset -10px -10px 20px rgba(0, 0, 0, 0.5);
      animation: rotateCercle 5s linear infinite;


    }


    .banner-vue {
      display: none;
    }

    .nav-mobile {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 70vw;
      height: 100vh;
      z-index: 1000;
      background-color: rgb(255, 255, 255);
      transform: translateX(-100%);
      transition: transform 1s ease-in-out;
    }

    .nav-mobile.nav-opened {
      transform: translateX(0);

    }

    .nav-mobile:not(.nav-opened) {
      transition: transform 1s ease-in-out;

    }

    label {
      position: fixed;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      width: 70px;
      cursor: pointer;
      z-index: 1000;
    }


    label span {
      background: #fff;
      border-radius: 10px;
      height: 7px;
      margin: 7px 0;
      transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    }

    span:nth-of-type(1) {
      width: 50%;

    }

    span:nth-of-type(2) {
      width: 100%;
    }


    span:nth-of-type(3) {
      width: 75%;

    }


    input[type="checkbox"] {
      display: none;
    }


    input[type="checkbox"]:checked~span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(8px, 0px)
    }


    input[type="checkbox"]:checked~span:nth-of-type(2) {

      transform-origin: top;
      transform: rotatez(-45deg)
    }


    input[type="checkbox"]:checked~span:nth-of-type(3) {

      transform-origin: bottom;
      width: 50%;
      transform: translate(30px, -11px) rotatez(45deg);

    }


    .background-video {
      visibility: hidden;
    }

    .home-title,
    h2,
    h3,
    .profile-link,
    .work-link,
    .contact-link {
      display: none;
    }
  }

  .home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    /* Utilisez la même image que le fond principal */
    background-size: cover;
    filter: brightness(120%);
    /* Ajustez la valeur de luminosité selon vos besoins */
  }
}

/* Media query for mobile devices */
@media screen and (max-width: 480px) {

  .home {
    width: 100vw;
    height: 100vh;
    background-image: url("/images/pexels-adrien-olichon-2387793.jpg");
    background-size: cover;
    position: relative;

    .title {
      text-align: center;
      padding-top: 0;
      font-family: "Bebas Neue", sans-serif;
      font-size: 22px;
      font-weight: 400;
      font-style: normal;
      position: absolute;
      display: block;
      z-index: 1;

      h1 {
        color: #fff;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 32px;
        letter-spacing: 7px;
        margin-bottom: 1rem;

      }

      span {
        color: white;
        letter-spacing: 20px;
        margin-left: 100px;


      }
    }

    .cercle {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: #0f0f0f;
      display: flex;
      position: relative;
      box-shadow:
        inset -10px -10px 20px rgba(0, 0, 0, 0.5),
        inset 10px 10px 20px rgba(255, 255, 255, 0.2),
        inset -10px -10px 20px rgba(0, 0, 0, 0.5);
      animation: rotateCercle 5s linear infinite;


    }


    .banner-vue {
      display: none;
    }

    .nav-mobile {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 70vw;
      height: 100vh;
      z-index: 1000;
      background-color: rgb(255, 255, 255);
      transform: translateX(-100%);
      transition: transform 1s ease-in-out;
    }

    .nav-mobile.nav-opened {
      transform: translateX(0);

    }

    .nav-mobile:not(.nav-opened) {
      transition: transform 1s ease-in-out;

    }

    label {
      position: fixed;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      width: 70px;
      cursor: pointer;
      z-index: 1000;
    }


    label span {
      background: #fff;
      border-radius: 10px;
      height: 7px;
      margin: 7px 0;
      transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);


    }

    span:nth-of-type(1) {
      width: 50%;

    }

    span:nth-of-type(2) {
      width: 100%;
    }


    span:nth-of-type(3) {
      width: 75%;

    }


    input[type="checkbox"] {
      display: none;
    }


    input[type="checkbox"]:checked~span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(8px, 0px)
    }


    input[type="checkbox"]:checked~span:nth-of-type(2) {

      transform-origin: top;
      transform: rotatez(-45deg)
    }


    input[type="checkbox"]:checked~span:nth-of-type(3) {

      transform-origin: bottom;
      width: 50%;
      transform: translate(30px, -11px) rotatez(45deg);

    }

  }

  .background-video {
    visibility: hidden;
  }

  .home-title,
  h2,
  h3,
  .profile-link,
  .work-link,
  .contact-link {
    display: none;
  }

  .home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: cover;
    filter: brightness(120%);
  }
}
</style>
