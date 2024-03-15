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
        <div class="ordi">
            <img v-if="project.image2" :src="`${imagesBasePath}${project.image2}`" alt="">
            <img v-if="project.image1" :src="`${imagesBasePath}${project.image1}`" alt="">
            <img v-if="project.image3" :src="`${imagesBasePath}${project.image3}`" alt="">

            <div v-if="project.video" class="div-video">
                <div
                    style="position: relative;margin-bottom: 10rem; width: 100%; overflow: hidden; padding-top: 56.25%;">
                    <p><iframe class="special-video" :src="project.video" allowfullscreen="allowfullscreen"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </p>
                </div>
            </div>
        </div>



    </div>
    
</template>

<script>

import Mainnav from '@/components/Nav.vue';
import Hello from '@/components/Hello.vue';
import NavMobile from '@/components/NavMobile.vue';



export default {

    methods: {

        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        closeNav() {
            this.isNavOpen = false;
        },

    },
    components: {
        Mainnav,
        Hello,
        NavMobile,
       
    },
    props: ['id'],
    data() {
        const imagesBasePath = "/portfolioJames/images/";
        return {
            isSoundOn: false,
            isNavOpen: false,
            isWhite: true,
            imagesBasePath,
            projects: {
                khéops: {
                    image2: `kheops.inspi.png`,
                    image1: `kheops.png`,
                    description: "Vous êtes approchés pour concevoir le site web mobile d’une marque de vêtements. L’objectif du site web n’est pas de vendre, mais bien d’informer sur les produits à venir. La marque en soi et le type de vêtements sont au choix (une suggestion sera fournie). Le site web doit avoir une largeur de 430 pixels. Le fichier de remise doit comprendre un plan de travail d’inspiration, une maquette basse résolution, une maquette haute résolution ainsi que tous les actifs (assets) nécessaires à l’intégration du site web mobile. Tous les éléments doivent avoir été construits dans Xd. Le recours à des éléments préconstruits ou externes est permis.",
                },
                spa: {
                    image3: `tablette-spa.png`,
                    image1: `spa.png`,
                    description: "Présentation du tout nouveau Spa (Fusion Spa) tendance au Mont-Tremblant qui offre une expérience de détente ultime dans un cadre magnifique et apaisant. Situé au cœur des Laurentides, ce spa de luxe est l'endroit idéal pour échapper au stress de la vie quotidienne et se ressourcer. Avec une gamme de services tels que des massages, des soins du visage, des bains à remous et bien plus encore, le Spa au Mont-Tremblant offre une expérience de spa complète.Cependant, afin de faciliter la prise de rendez-vous pour nos clients, nous avons besoin d'un site web où les clients peuvent réserver en ligne. Nous comprenons que la vie est occupée, c'est pourquoi nous voulons offrir une option de réservation pratique et facile à utiliser. Avec un site web convivial pour la réservation de rendez-vous, nos clients peuvent facilement planifier leur visite au spa en fonction de leur emploi du temps chargé.Nous sommes convaincus que ce nouveau Spa tendance au Mont-Tremblant offrira une expérience inoubliable à tous ceux qui y participent. Nous sommes impatients de vous voir bientôt au spa pour une journée de détente et de tranquillité.Les trois fonctionnalités de rendez-vous: Bain seulement; Soins (Massothérapie ou autres) seulement ou	Bain et soins"
                },
                persona: {
                    image2: `persona2.jpg`,
                    image1: `persona.png`,
                    description: "Maquette graphique représentant un persona dans le but de se familiariser avec la production de maquette ainsi que les bases du design.",
                },
                webshop: {
                    image2: `webshop2.png`,
                    image1: `webshop.png`,
                    description: "Vous devrez intégrer les éléments que vous avez préalablement recherchés et les transformer en une interface utilisateur qui soit à la fois intuitive, efficace et esthétique. Vous serez évalué sur votre capacité à utiliser les principes clés de UI/UX, tels que la hiérarchie visuelle, la typographie, la couleur, la disposition et tout autre moyen qui permettrait de mettre d’avant plan les principaux attraits d’un site et/ou les besoins clients.",
                },
                electroshoes: {
                    video: "https://www.youtube.com/embed/paSLthIEyZI",
                    description: "À partir de médias libres de droits, réalisez un montage audiovisuel au format mp4 avec un encodage H.264 d’une durée maximale de deux minutes. Les dimensions doivent être de 1280 x 720. Le sujet est libre.",

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
    background-color: white;
    height: 100%;
    overflow: hidden;

    .h1 {
        h1 {
            color: rgb(0, 0, 0);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 170px;
            text-align: center;
            margin-top: 2rem;
        }
    }

    .text {
        width: 60%;
        margin-left: 3rem;

        .sound {
            width: 50px;
            display: block;
            margin: 0 auto;
            cursor: pointer;
        }

        .sound:hover {
            width: 60px;
        }
    }

    h5 {
        color: black;
        font-size: 48px;
        margin-bottom: 2rem;


    }

    p {
        color: black;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 22px;

    }

    .ordi {
        width: 90vw;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 2rem;


        img {
            max-width: 100%;
            object-fit: contain;
            height: auto;
            margin: 3rem auto;
        }

        .div-video {
            width: 100%;
            min-width: 600px;
            max-width: 900px;
            margin: 2rem auto 10rem;

            div {
                .special-video {
                    width: 560px;
                    height: 315px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            }
        }
    }
}




@media screen and (max-width: 960px) {
    .nav-mobile-id {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 70vw;
        height: 100vh;
        z-index: 1000;
        background-color: rgb(0, 0, 0);
        color: white;
        transform: translateX(-100%);
        transition: transform 1s ease-in-out;
    }

    .nav-mobile-id.nav-opened {
        transform: translateX(0);

    }

    .nav-mobile-id:not(.nav-opened) {
        transition: transform 1s ease-in-out;

    }


    span.id {
        background: #010101;

    }

    .detail-id {

        .hello {
            right: -300px;
            top: 250px;
        }

        .text {
            width: 80%;
        }

        .ordi {
            margin-left: 0;
            display: flex;
            flex-direction: column;

            img {
                width: 60%;
                margin: 2rem auto;

                &:last-child {
                    margin-bottom: 10rem;
                }
            }

        }
    }
}

@media screen and (max-width: 480px) {

    .nav-mobile-id {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 70vw;
        height: 100vh;
        z-index: 1000;
        background-color: rgb(0, 0, 0);
        color: white;
        transform: translateX(-100%);
        transition: transform 1s ease-in-out;
    }

    .nav-mobile-id.nav-opened {
        transform: translateX(0);

    }

    .nav-mobile-id:not(.nav-opened) {
        transition: transform 1s ease-in-out;

    }


    span.id {
        background: #010101;

    }

    .detail-id {
        overflow: hidden;
        text-align: center;


        .h1 {
            h1 {
                font-size: 80px;
                padding-top: 6rem; 

            }

        }

        .hello {
            right: -380px;
            top: 240px;
        }

        .text {
            width: 70%;

            h5 {
                font-size: 39px;
            }

            p {
                font-size: 19px;
            }
        }

        .ordi {
            margin-left: 0;

            .div-video {
                width: 100%;
                min-width: 350px;
                max-width: 450px;
                margin: 2rem auto;


                div {
                    .special-video {
                        width: 360px;
                        height: 115px;
                        position: absolute;
                        top: 0;
                        left: 20px;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        border: none;

                    }
                }
            }

            img {
                width: 60%;
                margin: 2rem auto;

                &:last-child {
                    margin-bottom: 10rem;
                }
            }

        }
    }
}
</style>