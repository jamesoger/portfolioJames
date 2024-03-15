<template>
    <Mainnav />
    <div class="nav-mobile" :class="{ 'nav-opened': isNavOpen }">
        <NavMobile v-if="isNavOpen" @close-nav="closeNav" />
    </div>
    <label for="check">
        <input type="checkbox" id="check" @click="toggleNav" :class="{ 'nav-opened': isNavOpen }" />
        <span></span>
        <span></span>
        <span></span>
    </label>
    <div class="contact">
        <h1>Travaillons ensemble</h1>
        <h5>Ne sois pas timide</h5>
        <div class="text">

            <p>N'hésitez pas à me contacter, je suis
                toujours ouvert à discuter de nouveaux
                projets, d'idées créatives ou
                d'opportunités de faire parti de vos
                visions
            </p>
        </div>

        <div class="contactez">
            <div class="mail">
                <a :href="'mailto:jamesoger@hotmail.com'">
                    <img class="enveloppe" src="/images/enveloppe.png" alt="">
                </a>
            </div>
            <div class="phone">
                <a :href="'tel:+15145988499'">
                    <img class="telephone" src="/images/appeler.png" alt="">
                </a>
            </div>
        </div>
        <div class="banner-vue">
            <BannerVue />
        </div>
        <div class="logo-contact">
            <a href="https://github.com/jamesoger" target="_blank">
                <img src="/images/github (2).png" alt="GitHub">
            </a>
            <a href="https://www.linkedin.com/in/james-oger-641ba467/" target="_blank">
                <img src="/images/linkedin.png" alt="LinkedIn">
            </a>
            <a href="https://www.facebook.com/james.oger/" target="_blank">
                <img src="/images/facebook (1).png" alt="Facebook">
            </a>
        </div>
    </div>


</template>

<script>
import BannerVue from '@/components/ContactBanner.vue';
import Mainnav from '@/components/Nav.vue';
import NavMobile from '@/components/NavMobile.vue';

export default {
    data() {
        return {
            isNavOpen: false,
        };
    },
    components: {
        BannerVue,
        Mainnav,
        NavMobile
    },
    methods: {

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
.contact {
    .banner-vue {
        display: block;
    }

    h1 {
        color: rgb(255, 255, 255);
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 10vw;
        margin-left: 5vw;
        margin-top: 3rem;
    }

    h5 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
        font-size: 3.5vw;
        margin-left: 5vw;
        margin-bottom: 2rem;
    }

    .text {
        width: 20%;
        margin-left: 5vw;


        p {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: #fff;
            font-size: 1vw;
        }
    }



    .contactez {
        display: flex;
        justify-content: center;

        img {
            display: block;
            margin: 0 auto;
            width: 10vw;
            
        }

        img:hover {
            filter: drop-shadow(0px 0px 5px white);
        }

        .phone{
            margin-left: 8vw;
        }

        .mail,
        .phone {

            .telephone {
                border-radius: 50%;
            }
        }
    }

    .logo-contact {
        display: none;
    }

}






@media screen and (max-width: 960px) {

    .contact {
        position: relative;
        height: 100vh;

        h1 {
            
            margin-top: 6rem;
            text-align: center;
        }

        h5 {
            text-align: center;
            margin-left: 0rem;
            margin-bottom: 1rem;
        }

        .text {
            width: 100%;
            margin-left: 0rem;
            margin-top: 6rem;
            text-align: center;


            p {

                font-size: 20px;
            }
        }

        .contactez {
            margin-top: 5rem;
            margin-bottom: 8rem;

            img {
                width: 20vw;
                margin-top: 6vw;
            }

            img:hover {
                filter: drop-shadow(0px 0px 5px white);
            }

            .mail,
            .phone {

                .telephone {
                    border-radius: 50%;
                }
            }
        }
        .logo-contact {
        display: block;
        width: 35%;
        display: flex;
        margin-left: 60%;
        margin-bottom: 1rem;
        padding-bottom: 1rem;

        img {
            display: block;
            width: 60%;
            margin: 0;
            filter: drop-shadow(0px 0px 2px white);
        }
    }
    }

    
}



@media screen and (max-width: 480px) {

    .contact {
        h1 {
            font-size: 76px;
            margin-left: 0rem;
            margin-top: 10rem;
            text-align: center;
        }

        h5 {
            font-size: 30px;
            text-align: center;
            margin-left: 0rem;
            margin-bottom: 1rem;
        }

        .text {
            width: 90%;
            margin-left: 1rem;
            margin-top: 3rem;
            text-align: center;


            p {

                font-size: 15px;
            }
        }

        .contactez {

            img {
                width: 60%;
            }

            img:hover {
                filter: drop-shadow(0px 0px 5px white);
            }

            .mail,
            .phone {

                .telephone {
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
