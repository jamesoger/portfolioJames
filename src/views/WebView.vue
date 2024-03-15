<template>
    <div class="main-nav">
        <Mainnav />
    </div>
    <div class="nav-mobile" :class="{ 'nav-opened': isNavOpen }">
        <NavMobile v-if="isNavOpen" @close-nav="closeNav" />
    </div>
    <label class="web-label" for="check">
        <input type="checkbox" id="check" @click="toggleNav" :class="{ 'nav-opened': isNavOpen }" />
        <span></span>
        <span></span>
        <span></span>
    </label>

    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'festx' } }" @click="scrollToTop">
        <div class="festx">
            <div class="text">
                <h1>Fest X <span>Site web festival de musique</span></h1>
            </div>

            <img src="/images/lignes.jpg" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'quidditch' } }"
        @click="scrollToTop">
        <div class="quidditch">
            <div class="text">
                <h1>Quidditch<span>Application web quidditch battle</span></h1>
            </div>

            <img src="/images/pexels-rdne-stock-project-7979104.jpg" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'pubg4' } }" @click="scrollToTop">
        <div class="pub-g4">
            <div class="text">
                <h1>Pub G4<span>Site web restaurant style pub</span></h1>
            </div>

            <img src="/images/logo2.png" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'playlist' } }"
        @click="scrollToTop">
        <div class="pub-g4">
            <div class="text">
                <h1>PlayList<span>Petite application -playlist musicale</span></h1>
            </div>

            <img src="/images/victrola-record-players-R4Rdi0EfBws-unsplash.jpg" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'portfolio' } }"
        @click="scrollToTop">
        <div class="portfolio">
            <div class="text">
                <h1>Portfolio<span>Portfolio- présentation projets web et application</span></h1>
            </div>

            <img src="/images/portfolio2.png" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'laravelflix' } }"
        @click="scrollToTop">
        <div class="laravelflix">
            <div class="text">
                <h1>Laravelflix<span>site web films</span></h1>
            </div>

            <img src="/images/chrome_DMZLcXUpZv.png" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'web-id', params: { id: 'laraGPT' } }"
        @click="scrollToTop">
        <div class="laraGPT">
            <div class="text">
                <h1>LaraGPT<span>site web IA chatbot</span></h1>
            </div>

            <img src="/images/eveuhhh.jpg" alt="">
        </div>
    </router-link>
    <div class="banner-vue">
        <BannerVue />
    </div>
    <Arrow />
</template>

<script>
import Mainnav from '@/components/Nav.vue';
import BannerVue from '@/components/ContactBanner.vue';
import NavMobile from '@/components/NavMobile.vue';
import Arrow from '@/components/Arrow.vue';

export default {
    data() {
        return {
            isNavOpen: false,

        };
    },
    components: {
        Mainnav,
        BannerVue,
        NavMobile,
        Arrow
    },
    methods: {

        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        closeNav() {
            this.isNavOpen = false;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

    },


};
</script>


<style lang="scss">
.festx {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;
    margin-top: 9rem;

    .text {
        margin-right: 1rem;

        h1 {
            color: rgb(255, 255, 255);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 8vw;
            margin: 2rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
                font-size: 32px;
                color: red;
                margin-top: -3.8vw;
            }
        }
    }

    img {
        object-fit: contain;
        width: 12vw;
        height: auto;
        margin-top: 3rem;
    }
}

.festx,
.quidditch,
.pub-g4,
.laravelflix,
.laraGPT,
.portfolio {
    overflow: hidden;
    width: 70%;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.festx:hover,
.quidditch:hover,
.pub-g4:hover,
.laravelflix:hover,
.laraGPT:hover,
.portfolio:hover {
    transform: translateX(60px);
    overflow: hidden;
}

.quidditch {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;

    .text {
        margin-right: 1rem;

        h1 {
            color: rgb(255, 255, 255);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 8vw;
            margin: 2rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
                font-size: 32px;
                color: red;
                margin-top: -3.8vw;
            }
        }
    }

    img {
        object-fit: contain;
        width: 12vw;
        height: auto;
        margin-top: 3rem;
    }
}

.pub-g4 {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;

    .text {
        margin-right: 1rem;

        h1 {
            color: rgb(255, 255, 255);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 8vw;
            margin: 2rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
                font-size: 32px;
                color: red;
                margin-top: -3.8vw;
            }
        }
    }

    img {
        object-fit: contain;
        width: 12vw;
        height: auto;
        margin-top: 3rem;
    }
}

.laravelflix {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;

    .text {
        margin-right: 1rem;

        h1 {
            color: rgb(255, 255, 255);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 8vw;
            margin: 2rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
                font-size: 32px;
                color: red;
                margin-top: -3.8vw;
            }
        }
    }

    img {
        object-fit: contain;
        width: 12vw;
        height: auto;
        margin-top: 3rem;
    }
}

.laraGPT {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;

    .text {
        margin-right: 1rem;

        h1 {
            color: rgb(255, 255, 255);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 8vw;
            margin: 2rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
                font-size: 32px;
                color: red;
                margin-top: -3.8vw;
            }
        }
    }

    img {
        object-fit: contain;
        width: 12vw;
        height: auto;
        margin-top: 3rem;
    }
}

.portfolio {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;

    .text {
        margin-right: 1rem;

        h1 {
            color: rgb(255, 255, 255);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 8vw;
            margin: 2rem 0 0.5rem 0;
            display: flex;
            flex-direction: column;

            span {
                font-size: 32px;
                color: red;
                margin-top: -3.8vw;
            }
        }
    }

    img {
        object-fit: contain;
        width: 12vw;
        height: auto;
        margin-top: 3rem;
    }
}



/* Media query for small laptops */
@media screen and (max-width: 960px) {

    .festx:hover,
    .laraGPT:hover,
    .quidditch:hover,
    .pub-g4:hover,
    .laravelflix:hover,
    .portfolio:hover {
        transform: none;
    }

    .festx,
    .laraGPT,
    .quidditch,
    .pub-g4,
    .portfolio {
        margin: 3rem 0 2rem 14vw;
        .text {
            margin-right: 1rem;
            width: 100%;

            h1 {
                font-size: 10vw;
                margin: 2rem 0 0.5rem 0;

                span {
                    font-size: 3vw;
                    

                }
            }
        }

        img {
            display: none;
        }
    }

    .laravelflix {
        margin: 3rem 0 2rem 14vw;
        width: 80%;

        .text {
            h1 {
                font-size: 10vw;

                span {
                    font-size: 3vw;
                   

                }
            }

        }

        img {
            display: none;
        }

    }

    /* Media query for mobile devices */
    @media screen and (max-width: 480px) {
      .web-label{
        margin-right: 1.25rem;
      }
        .festx:hover,
        .laraGPT:hover,
        .quidditch:hover,
        .pub-g4:hover,
        .laravelflix:hover,
        .portfolio:hover {
            transform: none;
        }

        .festx,
        .laraGPT,
        .quidditch,
        .pub-g4,
        .portfolio {
            margin: 3rem 0 2rem 14vw;
            width: 90%;

            .text {
                margin-right: 1rem;
                width: 100%;

                h1 {
                    font-size: 15vw;

                    span {
                        font-size: 4vw;
                        margin-top: -5vw;

                    }
                }
            }

            img {
                display: none;
            }
        }

        .laravelflix {
            margin: 3rem 0 2rem 14vw;
            width: 90%;

            .text {
                margin-right: 1rem;
                width: 100%;

                h1 {
                    font-size: 15vw;
                   

                    span {
                        font-size: 4vw;
                        margin-top: -5vw;

                    }
                }

            }

            img {
                display: none;
            }

        }
    }
}
</style>
