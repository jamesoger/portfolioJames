<template>
  <div class="nav-mobile-id" :class="{ 'nav-opened': isNavOpen }">
    <NavMobile :isWhite="isWhite" v-if="isNavOpen" @close-nav="closeNav" />
  </div>
  <label for="check">
    <input type="checkbox" id="check" @click="toggleNav" :class="{ 'nav-opened': isNavOpen }" />
    <span class="id"></span>
    <span class="id"></span>
    <span class="id"></span>
  </label>
  <Mainnav :isBlack="true" />

  <div class="detail-id">
    <div class="h1">
      <h1>{{ $route.params.id }}</h1>
    </div>
    <div class="hello-web">
      <Hello />
    </div>
    <div class="text">
      <h5>Devis</h5>
      <p>{{ project.description }}</p>
    </div>
    <div class="ordi" v-if="project.image2 || project.image1 || project.image3 || project.video">
      <div class="img-container" v-if="project.image2">
        <div class="github-container">
          <a class="github" :href="project.link" target="_blank">
            <img src="/images/github (2).png" alt="">
          </a>
        </div>
        <img class="img-web" :src="project.image2" alt="">
      </div>
      <div class="img-container" v-if="project.image1">
        <div class="github-container">
          <a class="github" :href="project.link" target="_blank">
            <img src="/images/github (2).png" alt="">
          </a>
        </div>
        <img class="img-web" :src="project.image1" alt="">
      </div>
      <div class="img-container" v-if="project.image3">
        <div class="github-container">
          <a class="github" :href="project.link" target="_blank">
            <img src="/images/github (2).png" alt="">
          </a>
        </div>
        <img class="img-web" :src="project.image3" alt="">
      </div>
      <video class="video-web" v-if="project.video" :src="project.video" autoplay muted loop></video>
    </div>
  </div>
</template>


<script>
import Mainnav from '@/components/Nav.vue';
import Hello from '@/components/Hello.vue';
import NavMobile from '@/components/NavMobile.vue';
export default {

  components: {
    Mainnav,
    Hello,
    NavMobile
  },
  props: ['id'],
  methods: {

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },

  },
  data() {
    const imagesBasePath = "/portfolioJames/images/";
    const imagePathvideo = "/portfolioJames/videos/";
    return {
      isNavOpen: false,
      isWhite: true,
      projects: {
        festx: {
          image1: `${imagesBasePath}festx.png`,
          video: `${imagePathvideo}chrome_crZRtsUiS3.mp4`,
          description: "Un festival vous demande de créer leur image de marque et leur site Web. Dû à votre réputation légendaire, ils décident de vous faire confiance pour les choix en lien avec la conception et la production du site. Chacun des départements a toutefois des demandes et des besoins spécifiques que vous devrez respecter. Afin d’offrir un temps de livraison convenable, le projet sera fait en équipe. Vous devrez aussi faire un suivi constant avec votre directeur artistique et technique, vos enseignants, afin que le projet avance dans la bonne direction.",
          link: "https://github.com/jamesoger/projet_web_2",

        },
        quidditch: {
          image2: `${imagesBasePath}quidditch3 (2).png`,
          image1: `${imagesBasePath}quidditch.png`,
          description: "La Fédération Mondiale de quidditch professionnel a exprimé le désir de stimuler l'intérêt pour ses activités et d'accroître la participation à ses événements. À cet effet, elle ambitionne la création d'une application web novatrice permettant aux utilisateurs de localiser aisément les événements sportifs à proximité. Cette plateforme aura pour objectif de mettre en lumière ses équipes et joueurs étoiles en publiant diverses données statistiques, images captivantes et informations pertinentes liées à la ligue, aux équipes et aux joueurs.",
          link: "https://github.com/jamesoger/synthese_James_oger",
        },
        pubg4: {
          image2: `${imagesBasePath}g4.png`,
          image1: `${imagesBasePath}g42.png`,
          description: "J’ai besoin d’un site Web pour faire connaitre mon restaurant et proposer un accès facile et agréable à notre menu toujours changeant. Les clients prêts à commander pourront naviguer vers le site à l’aide d’un code QR et consulter le menu qui devra contenir le nom des plats, une courte description et le prix. Les différents plats devront aussi être ordonnés par catégories pour faciliter la navigation. S’il est possible d’avoir une image pour chaque plat, ce serait l’idéal, mais le client doit pouvoir naviguer la liste rapidement.",
          link: "https://github.com/jamesoger/pub_G4_cadriciel_last_version",
        },
        playlist: {
          image2: `${imagesBasePath}playlist2.png`,
          image1: `${imagesBasePath}playlist.png`,
          description: "L’objectif de ce travail synthèse est de créer un lecteur de pistes musicales. Vous devrez intégrer et dynamiser le lecteur de zéro ainsi que répondre aux différentes fonctionnalités décrites à la page 2. La dynamisation devra être faite avec Vue.JS, en suivant les techniques vues en classe. Si vous utilisez des fichiers autres que main.js, assurez-vous d’utiliser le système de modules avec les imports et exports. Une liste de chansons est fournie ainsi qu’un fichier JSON qui contient les informations associées à chacune de ces chansons. Votre projet devra avoir une “page” d’accueil ainsi qu’une “page” pour le lecteur de musique lui-même. Les pages devront être faites navigables à l’aide du principe SPA, donc sans rafraichir le navigateur.",
          link: "https://github.com/jamesoger/playlist"
        },
        portfolio: {
          image2: `${imagesBasePath}portfolio1.png`,
          image3: `${imagesBasePath}portfolio3.png`,
          description: "Réalisation de mon portfolio en Vue.js",
          link: "https://github.com/jamesoger/portfolioJames"
        },
        laravelflix: {
          image1: `${imagesBasePath}laravelflix.png`,
          image2: `${imagesBasePath}laravelflix2.png`,
          description: "L’objectif de ce travail pratique est de créer un petit site web permettant de consulter une liste de films ainsi que les détails de chaque film. Les informations seront récupérées dans la BDD fournie.",
          link: "https://github.com/jamesoger/laravelflix"
        },
        laraGPT: {
          image2: `${imagesBasePath}laragpt.png`,
          image1: `${imagesBasePath}laragpt2.png`,
          description: "L’objectif de ce travail est de créer un site web qui prend la forme d’un « chatbot » nommé LaraGPT: on peut poser différentes questions à l’aide d’un champ de texte et le site web nous répond de façon personnalisée selon certains critères expliqués plus bas. Le site doit fournir un formulaire d’enregistrement pour la création d'un compte et un formulaire de connexion qui permet d’accéder à la page des messages : si l’utilisateur n’est pas connecté et qu’il essaie d'accéder à la page des messages, il sera automatiquement redirigé vers le formulaire de connexion.",
          link: "https://github.com/jamesoger/laragpt"
        },

      },
      project: {}
    };
  },
  mounted() {
    this.project = this.projects[this.$route.params.id];
  }

};
</script>

<style lang="scss">
.detail-id {

  .hello-web {
    position: absolute;
    z-index: 2;
   left: 70%;
   
    
  }

  .ordi {
    position: relative;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;


    .video-web {
      width: 40%;
    }

    .img-container {
      position: relative;
      display: inline-block;
      overflow: hidden;

      .img-web {
        max-width: 100%;
        height: auto;
        margin: 2rem;
      }

      .github-container {
        background-color: #ffffffb3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;

        .github {
          width: 15%;
          height: auto;
          text-decoration: none;
          transform: translate(-50%, -50%);
        }
      }

      &:hover .github-container {
        opacity: 1;
      }

      &:hover .github {
        opacity: 1;
      }
    }
  }
}


@media screen and (max-width: 960px) {
  .detail-id {
    text-align: center;


    .hello-web {
      right: -300px;
      top: 260px;
      position: absolute;
    }

    .ordi {
      .video-web {
        width: 80%;
        margin: 2rem auto;
      }

      .img-container {
        .img-web {
          width: 80%;
          height: auto;
          margin: 2rem;
        }

        .github-container {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease;

          .github {
            width: 100%;
            height: auto;
            text-decoration: none;

            img {
              max-width: 100%;
              width: 30%;
              height: auto;
              margin: 3rem auto 0;
              display: block;
            }
          }
        }

        &:hover .github-container {
          opacity: 1;
        }

        &:hover .github {
          opacity: 1;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .detail-id {
    text-align: center;
    position: relative;

    .hello-web {
      position: absolute;
      right: -400px;
      top: 250px;
    }

    .ordi {
      .video-web {
        width: 80%;
      }

      .img-container {
        .img-web {
          width: 80%;
          height: auto;
          margin: 2rem;
        }

        .github-container {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease;

          .github {
            width: 100%;
            height: auto;
            text-decoration: none;

            img {
              max-width: 100%;
              width: 30%;
              height: auto;
              margin: 3rem auto 0;
              display: block;
            }
          }
        }

        &:hover .github-container {
          opacity: 1;
        }

        &:hover .github {
          opacity: 1;
        }
      }
    }
  }
}
</style>
