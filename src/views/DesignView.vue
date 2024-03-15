<template>
    <div class="main-nav">
        <Mainnav />
    </div>
     
     <div class="nav-mobile" :class="{ 'nav-opened': isNavOpen }">
      <NavMobile v-if="isNavOpen" @close-nav="closeNav" />
    </div>
    <label class="design-label"  for="check">
      <input type="checkbox" id="check" @click="toggleNav" :class="{ 'nav-opened': isNavOpen }" />
      <span></span>
      <span></span>
      <span></span>
    </label>
    <router-link style="text-decoration: none;" :to="{ name: 'design-id', params: { id: 'khéops' } }"  @click="scrollToTop">
        <div class="mode">
            <div class="text">
                <h1>Khéops <span>Maquette site web marque de vêtements</span></h1>
            </div>

            <img src="/images/pexels-steven-arenas-618701.png" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'design-id', params: { id: 'spa' } }"  @click="scrollToTop">
        <div class="spa">
            <div class="text">
                <h1>Spa <span>Maquette site web spa-détente</span></h1>
            </div>

            <img src="/images/pine-watt-2Hzmz15wGik-unsplash.jpg" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'design-id', params: { id: 'persona' } }"  @click="scrollToTop">
        <div class="persona">
            <div class="text">
                <h1>Persona <span>Maquette Persona</span></h1>
            </div>

            <img src="/images/chester-wade-msnyz9L6gs4-unsplash (1).jpg" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'design-id', params: { id: 'webshop' } }"  @click="scrollToTop">
        <div class="webshop">
            <div class="text">
                <h1>webshop <span>Maquette magasin de plantes</span></h1>
            </div>

            <img src="/images/feey-zzS4r5iAoS0-unsplash.jpg" alt="">
        </div>
    </router-link>
    <router-link style="text-decoration: none;" :to="{ name: 'design-id', params: { id: 'electroshoes' } }" @click="scrollToTop">
        <div class="Montage-vidéo">
            <div class="text">
                <h1>Electro-shoes <span>Montage vidéo-thème libre</span></h1>
            </div>

            <img src="/images/pexels-ray-piedra-1478442.jpg" alt="">
        </div>
    </router-link>
    <div class="banner-vue">
        <BannerVue />
    </div>
    <div class="arrow">
         <Arrow/>
    </div>
   
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
        NavMobile,
        BannerVue,
        Mainnav,
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

label{
    input{
        display: none;
    }
}

.arrow{
    margin-right: 1.25rem;
}

.mode {
    display: flex;
    align-items: center;
    margin: 9rem 0 2rem 20vw;
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
                font-size: 2vw;
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

.mode,
.webshop,
.Montage-vidéo,
.persona,
.spa {
    overflow: hidden;
    width: 70%;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.mode:hover,
.webshop:hover,
.Montage-vidéo:hover,
.persona:hover,
.spa:hover {
    transform: translateX(60px);
    overflow: hidden;
}

.spa {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;
    transition: transform 0.3s ease;

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
                font-size: 2vw;
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

.persona {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;
    transition: transform 0.3s ease;

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
                font-size: 2vw;
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

.webshop {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;
    transition: transform 0.3s ease;

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
                font-size: 2vw;
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

.Montage-vidéo {
    display: flex;
    align-items: center;
    margin: 3rem 0 2rem 20vw;
    position: relative;
    transition: transform 0.3s ease;

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
                font-size: 2vw;
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

    .mode,
    .persona,
    .spa,
    .persona,
    .webshop {
        margin: 3rem 0 2rem 14vw;
        
        .text {
            margin-right: 1rem;
            width: 100%;

            h1 {
                font-size: 10vw;
                margin: 2rem 0 0rem 0;

                span {
                    font-size: 3vw;
                    

                }
            }
        }

        img {
           display: none;
        }
    }

    .Montage-vidéo {
        width:80%;
        margin: 3rem 0 2rem 14vw;

        .text {
            width: 100%;
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

  
    .mode:hover,
    .webshop:hover,
    .Montage-vidéo:hover,
    .persona:hover,
    .spa:hover {
        transform: none;
        overflow: hidden;
    }
}

/* Media query for mobile devices */
@media screen and (max-width: 480px) {
   .main-nav{
    display: none;
   }
   
   .design-label{
    margin-right: 1.25rem;
   }
    .mode:hover,
    .webshop:hover,
    .Montage-vidéo:hover,
    .persona:hover,
    .spa:hover {
        transform: none;
        
    }

    .mode,
    .persona,
    .spa,
    .persona,
    .webshop {
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

    .Montage-vidéo {
        line-height: 1;
        width: 90%;
        margin: 3rem 0 3rem 14vw;
        img {
            display: none;
        }

        .text {
            margin-right: 1rem;
            width: 100%;
            h1 {
                font-size: 15vw;
               

                span {
                    font-size: 4vw;
                    margin-top: 0vw;
                    

                }
            }

        }
    }

   
}
</style>