<template>
     <div class="main-nav">
        <Mainnav />
    </div>
    <div class="nav-mobile" :class="{ 'nav-opened': isNavOpen }">
        <NavMobile v-if="isNavOpen" @close-nav="closeNav" />
    </div>
    <label for="check">
        <input type="checkbox" id="check" @click="toggleNav" :class="{ 'nav-opened': isNavOpen }" />
        <span></span>
        <span></span>
        <span></span>
    </label>
    <div class="banner-projets">
        <h1 :class="{ 'text-scroll': currentIndex === 0 }">{{ texts[currentIndex] }}</h1>
    </div>
    <div class="box">
        <router-link style="text-decoration: none;" to="projets/design">
            <div class="design" @mouseenter="showVideo" @mouseleave="hideVideo">
                <h1>Design</h1>
            </div>
        </router-link>
        <router-link style="text-decoration: none;" to="projets/web">
            <div class="web" @mouseenter="showVideo" @mouseleave="hideVideo">
                <h1>Web</h1>
            </div>
        </router-link>

    </div>
    <div class="video-container">
        <video :class="{'play': isVideoPlaying}" src="/videos/pexels-cottonbro-9669051 (Original).mp4" autoplay loop muted></video>
    </div>
    <div class="banner-vue">
        <BannerVue />
    </div>
    
</template>
  
<script>
import Mainnav from '@/components/Nav.vue';
import NavMobile from '@/components/NavMobile.vue';
import BannerVue from '@/components/ContactBanner.vue';
export default {

    components: {
        NavMobile,
        BannerVue,
        Mainnav
    },
    data() {
        return {
            currentIndex: 0,
            texts: ['Design', 'Développement web', 'Intégration web'],
            isNavOpen: false,
            isVideoPlaying: window.innerWidth <= 960,
        };
    },
    mounted() {
        setInterval(this.updateText, 9000);
    },
    methods: {
        updateText() {
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        },

        showVideo() {
            const video = document.querySelector('.video-container video');
            video.style.opacity = 1;
        },
        hideVideo() {
            const video = document.querySelector('.video-container video');
            video.style.opacity = 0;
        },
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        closeNav() {
            this.isNavOpen = false;
        },
    },
};
</script>
  
<style lang="scss">
.banner-projets {
    width: 100vw;
    height: 20%;
    padding-top: 6rem;
    overflow: hidden;

    h1 {
        color: white;
        font-size: 5vw;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        white-space: nowrap;
        animation: scrollText 9s linear infinite;
    }
}

.video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s ease;

    }
    
}

@keyframes scrollText {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.box {
  width: 100vw;
  height: 100%;
  margin: 4.5rem 0rem 0rem;
  display: flex;
  justify-content: center;

  .design,
  .web {
    width: 20vw;
    height: 20vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:
      inset -10px -10px 20px rgba(0, 0, 0, 0.5),
      inset 10px 10px 20px rgba(255, 255, 255, 0.2),
      inset -10px -10px 20px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    border-radius: 10%;
    cursor: pointer;

    h1 {
      color: black;
      font-family: "Bebas Neue", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 4vw;
    }

    &:hover {
      box-shadow: inset 0 0 22px rgba(0, 0, 0, 0.879);
      
    }
  }

  .design {
    margin-right: 10vw;
  }
}




/* Media query for small laptops */
@media screen and (max-width: 960px) {

    .video-container{
        .play{
            opacity: 1!important;
        }
    }

    .banner-vue{
        display: none;
    }
    .nav-mobile {
      position: fixed;
      top: 0;
      left: 0;
      width: 70vw;
      height: 100vh;
      z-index: 100;
      background-color: white;
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

    .banner-projets {
        h1 {
            font-size: 56px;
        }
    }

    .box {
        flex-direction: row;
        align-items: center;
        margin-top: 12rem;
        

        .design {
            width: 300px;
            height: 300px;
            margin-right: 4rem;

            h1 {
                font-size: 38px;

            }
        }

        .web {
            width: 300px;
            height: 300px;

            h1 {
                font-size: 38px;
            }
        }
    }
}

/* Media query for mobile devices */
@media screen and (max-width: 480px) {
    .nav-mobile {
      position: fixed;
      top: 0;
      left: 0;
      width: 70vw;
      height: 100vh;
      z-index: 100;
      background-color: white;
      transform: translateX(-100%);
      transition: transform 1s ease-in-out;
    }

    .video-container{
      video{
        display: none;
      }
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

    .banner-projets {
        h1 {
            font-size: 42px;
        }
    }

    .box {
        flex-direction: column;
        align-items: center;
        margin-top: 22vw;

        .design {
            width: 160px;
            height: 160px;
            margin-bottom: 6rem;
            margin-right: 0;

            h1 {
                font-size: 38px;

            }
        }

        .web {
            width: 160px;
            height: 160px;

            h1 {
                font-size: 38px;
            }
            &:last-child {
        margin-bottom: 2rem; 
    }
        }
    }
}
</style>
  
  
