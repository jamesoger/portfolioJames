<template>
  <div class="main-nav">
    <MainNav />
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
  <div class="container">
    <img class="img-profile" :src="`${imagesBasePath}1000009801.jpg`" alt="" @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave">
    <div class="profil-content">
      <video autoplay loop muted>
        <source src="/videos/explosion.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="phrases">
        <h1>Développeur web passionné curieux efficace créatif </h1>
        <h1 class="deux">design Full-stack Intégration développement web </h1>
        <h1>html scss vue.js angular laravel php </h1>
      </div>

    </div>
    <div class="second-parallax">
      <div class="text">
        <h1 class="a-propos">À propos</h1>
        <br>
        <p class="profile-h2"> Bonjour, je suis James Oger, développeur web polyvalent et passionné !</p>
        <p>J'apporte une expertise diversifiée et une solide expérience dans
          la
          création de produits numériques exceptionnels. Ma maîtrise des technologies telles qu'Angular, Vue.js,
          JavaScript, PHP, Laravel et WordPress témoigne de ma polyvalence et de ma compréhension approfondie du
          développement web. <br> <br>
          Fort de 10 années d'experience en gestion de projets environnementaux, mon sens de la
          créativité et de l'organisation sont un atout pour votre équipe. Diplomé en conception et programmation de
          sites
          web au cégep de Saint-Jérôme, mon expertise va du design et de la création de maquettes, en passant par
          l'intégration web et s'étend également aux technologies back-end telles que PHP et
          Laravel,
          garantissant des performances optimales et une stabilité robuste pour les applications et les sites web que je
          développe. <br> <br>
          En
          plus de
          ma compétence technique, mon sens aiguisé du design joue un rôle central dans chaque projet. Je
          m'efforce de
          créer
          des expériences utilisateur attrayantes et intuitives, intégrant harmonieusement la fonctionnalité et
          l'esthétique. Mon approche équilibrée entre le front-end et le back-end assure des produits finaux qui
          allient
          puissance, élégance et convivialité. Avec un engagement continu envers l'apprentissage et l'innovation,
          je
          suis
          prêt à relever de nouveaux défis et à contribuer à des projets ambitieux. Mon objectif est de
          transcender
          les
          attentes en matière de développement web, offrant des solutions technologiques de pointe tout en plaçant
          l'utilisateur au cœur de chaque création.
        </p>

      </div>
    </div>
    <div class="cv-container" @mouseover="handleCVMouseOver" @mouseleave="handleCVMouseLeave">
      <video autoplay loop muted>
        <source src="/videos/explosion.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img src="/images/cv James Oger french.png" alt="cv">
      <a class="resume" v-show="isCvHovered" @click="downloadCV">Télécharger cv</a>
    </div>

  </div>
  <div class="banner-vue">
    <BannerVue />
  </div>
  <Arrow/>
</template>

<script>

import NavMobile from '@/components/NavMobile.vue';
import BannerVue from '@/components/ContactBanner.vue';
import MainNav from '@/components/Nav.vue';
import Arrow from '@/components/Arrow.vue';


export default {
  components: {
    NavMobile,
    BannerVue,
    MainNav,
    Arrow
  },
  data() {
    const imagesBasePath = "/portfolioJames/images/";
    const cvPath = "/portfolioJames/cv/";
    return {
      isCvHovered: false,
      isNavOpen: false,
      imagesBasePath,
      cvPath,
      scrollY: 0,

    };
  },
  methods: {

    handleScroll() {
      this.scrollY = window.scrollY;
    },
    handleCVMouseOver() {
      this.isCvHovered = true;
    },
    handleCVMouseLeave() {
      this.isCvHovered = false;
    },
    downloadCV() {
      const downloadLink = document.createElement('a');
      downloadLink.href = `${this.cvPath}cv James Oger french.pdf`;
      downloadLink.download = 'cv_James_Oger.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },

  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    const phrasesContainer = document.querySelector(".phrases");
    const phrases = phrasesContainer.querySelectorAll("h1");

    window.addEventListener("scroll", function () {

      const scrollY = window.scrollY;
      const direction = scrollY % (phrasesContainer.clientHeight * 3);
      phrases[0].style.transform = `translateX(-${direction}px)`;
      phrases[1].style.transform = `translateX(${direction}px)`;
      phrases[2].style.transform = `translateX(-${direction}px)`;
    });
  }

};
</script>

<style lang="scss">

.main-nav{
  position: relative;
  z-index: 1000;
}
.container {
  overflow: hidden;

  .cv-container {
    position: relative;
    cursor: pointer;
    width: 100%;
    background-image: url("/images/pexels-marek-piwnicki-7543550.jpg");
    background-attachment: fixed;
    background-position: 90% 20%;
    background-repeat: no-repeat;
    background-size: cover;

    video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


    img {
      position: relative;
      padding-top: 10em;
      padding-bottom: 10em;
      width: 30%;
      margin: 8rem auto 5rem;
      overflow: hidden;
      display: block;
      transition: transform 0.5s ease-in-out;
    
    }

    .resume {
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      cursor: pointer;
    }
  }

  .cv-container:hover {
    img {
      transform: scale(1.1);
    }

    .resume {
      display: block;
    }
  }

  .resume {
    display: inline-block;
    color: #fff;
    padding: 15px 30px;
    background-color: black;
    text-align: center;
    margin-top: 20px;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s, color 0.3s;
  }

  .img-profile {
    display: block;
    cursor: pointer;
    width: 30%;
    height: auto;
    margin: 100px auto;
    filter: drop-shadow(0px 0px 5px white);
  }

}


.profil-content {
  overflow: hidden;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: background-color 1s ease, color 1s ease;
  cursor: pointer;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .phrases {
    position: absolute;
    top: 6%;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    font-size: 4vw;
    font-family: "Bebas Neue", sans-serif;
    white-space: nowrap;
    text-shadow: 0 0 10px rgba(232, 230, 230, 0.8);
    height: 100vh;

    h1 {
      word-spacing: 100px;

    }

    .deux {
      margin-right: 800px;
    }

    h1:first-child {
      margin-bottom: 80px;
      margin-left: 25%;
    }

    h1:last-child {
      margin-top: 80px;
      margin-left: 40%;
    }
  }
}

.second-parallax {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 2rem;


  .text {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    color: white;
    width: 50%;
    margin-top: 20px;
    padding: 20px;
    transition: background-color 1s ease, color 1s ease;

    .profile-h2 {
      font-weight: bold;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin-bottom: 1rem;
      font-size: 22px;
    }

    .a-propos {
      font-size: 48px;
      font-weight: bold;
    }

    h5 {
      font-size: 30px;
      margin-top: 2rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      text-align: center;
    }

    img {
      display: block;
      width: 50%;
      margin: 2rem auto;
    }



  }
}



/* Media query for small laptops */
@media screen and (max-width: 960px) {

  .profil-content {
    height: 650px;

    .phrases {
      margin-top: 2rem;
      height: 100%;

      h1 {
        
        margin-top: 1rem;
      }
    }
  }

  .container {
    .img-profile {
      width: 300px;

    }

    .cv-container {
      img {
        width: 40%;
      }
    }

  }

  .second-parallax {


    .text {
      font-size: 16px;
      width: 70%;

    }
  }
}

/* Media query for mobile devices */
@media screen and (max-width: 480px) {

  .banner-vue {
    display: none;
  }

  .profil-content {
    .phrases {
      margin-top: 2rem;
      height: 100%;

      h1 {
        font-size: 0.75em;
        margin-top: 2rem;
        font-size: 13vw;
      }
    }
  }


  .container {
    .img-profile {
      width: 230px;
    }

    video{
      display: none;
    }

    .cv-container {
      img {
        width: 70%;
      }
    }

  }

  .second-parallax {


    .text {
      font-size: 14px;
      width: 80%;
    }
  }
}
</style>