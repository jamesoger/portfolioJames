<template>
    <div :class="{ 'nav-cell': !isWhite, 'nav-cell-white': isWhite }">
        <div class="circles-container">
            <div class="circle" id="circle1"></div>
            <div class="circle" id="circle2"></div>
            <div class="circle" id="circle3"></div>
        </div>
        <div class="link">
            <router-link style="text-decoration: none;" :to="{ name: 'accueil' }">
                <h1>Accueil</h1>
            </router-link>
            <router-link style="text-decoration: none;" :to="{ name: 'profil' }">
                <h1>Profil</h1>
            </router-link>
            <router-link style="text-decoration: none;" :to="{ name: 'projets' }">
                <h1>Projets</h1>
            </router-link>
            <router-link style="text-decoration: none;" :to="{ name: 'contact' }">
                <h1>Contact</h1>
            </router-link>
        </div>

        <div class="logo">
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
import { RouterLink, useRouter } from 'vue-router';

export default {
    props: ['isWhite'],
};
</script>

<style lang="scss">
.nav-cell {
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;

    .circles-container {
        position: relative;
        top: -15%;
        left: -40%;
        z-index: 1;
    }

    .circle {
        border-radius: 50%;
        position: absolute;
        background-color: #fffefe;
        box-shadow: inset 15px 15px 30px rgba(0, 0, 0, 0.2),
            inset -15px -15px 30px rgba(255, 255, 255, 0.8);
        border: 1px solid rgb(233, 229, 229);
    }

    #circle1 {
        width: 450px;
        height: 450px;
        top: 0;
        left: 0;


    }

    #circle2 {
        width: 350px;
        height: 350px;
        top: 25px;
        left: 25px;
    }

    #circle3 {
        width: 250px;
        height: 250px;
        top: 50px;
        left: 50px;
    }


    .link {
        margin-top: 13rem;
        z-index: 4;

        h1 {
            color: black;
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 12px;
            font-size: 9vw;
            padding: 0.25em;
            text-shadow: 0 0 20px rgba(59, 58, 58, 0.8);
            margin-left: 3rem;

            &:last-child {
                margin-bottom: 2rem;
            }

        }
    }



    .logo {
        display: block;
        width: 45%;
        display: flex;
        position: absolute;
        bottom: 20px;
        left: 10%;


        img {
            display: block;
            width: 100%;
            margin: 10px;
            padding: 6px;
            filter: drop-shadow(0px 0px 4px rgb(152, 150, 150));
        }

    }
}

.nav-cell-white {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;

    .circles-container {
        position: fixed;
        top: -150px;
        left: -150px;
        z-index: 1;
    }

    .circle {
        border-radius: 50%;
        position: absolute;
        background-color: #121111;
        box-shadow: inset 15px 15px 30px rgba(0, 0, 0, 0.2),
            inset -15px -15px 30px rgba(57, 55, 55, 0.8);
        border: 1px solid rgb(15, 15, 15);
    }

    #circle1 {
        width: 450px;
        height: 450px;
        top: 0;
        left: 0;


    }

    #circle2 {
        width: 350px;
        height: 350px;
        top: 25px;
        left: 25px;
    }

    #circle3 {
        width: 250px;
        height: 250px;
        top: 50px;
        left: 50px;
    }


    .link {
        margin-top: 13rem;
        z-index: 4;

        h1 {
            color: rgb(242, 238, 238);
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 12px;
            font-size: 9vw;
            padding: 0.25em;
            text-shadow: 0 0 20px rgba(179, 179, 179, 0.8);
            margin-left: 3rem;

            &:last-child {
                margin-bottom: 2rem;
            }

        }
    }



    .logo {
        display: block;
        width: 45%;
        display: flex;
        position: absolute;
        bottom: 20px;
        left: 10%;


        img {
            display: block;
            width: 100%;
            margin: 10px;
            padding: 6px;
            filter: drop-shadow(0px 0px 8px rgb(214, 209, 209));
        }

    }
}


@media screen and (max-width: 480px) {
    .nav-cell {
        background-color: white;
        width: 100%;
        height: 100%;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        .circles-container {
            position: relative;
            top: -17%;
            left: -60%;
            z-index: 1;
        }

        .circle {
            border-radius: 50%;
            position: absolute;
            background-color: #fffefe;
            box-shadow: inset 15px 15px 30px rgba(0, 0, 0, 0.2),
                inset -15px -15px 30px rgba(255, 255, 255, 0.8);
            border: 1px solid rgb(233, 229, 229);
        }

        #circle1 {
            width: 450px;
            height: 450px;
            top: 0;
            left: 0;


        }

        #circle2 {
            width: 350px;
            height: 350px;
            top: 25px;
            left: 25px;
        }

        #circle3 {
            width: 250px;
            height: 250px;
            top: 50px;
            left: 50px;
        }

        .link {
            margin-top: 5rem;
            z-index: 4;

            h1 {
                color: black;
                font-family: "Bebas Neue", sans-serif;
                font-weight: 400;
                font-style: normal;
                letter-spacing: 12px;
                font-size: 9vw;
                padding: 0.25em;
                text-shadow: 0 0 20px rgba(59, 58, 58, 0.8);
                margin-left: 2rem;

                &:last-child {
                    margin-bottom: 2rem;
                }

            }
        }

        .logo {
            display: block;
            width: 45%;
            position: absolute;
            bottom: 20px;
            left: 50%; 
            transform: translateX(-50%);
            display: flex;

            img {
                display: block;
                width: 100%;
                margin: 10px;
                padding: 6px;
                filter: drop-shadow(0px 0px 8px rgb(214, 209, 209));
            }
        }

    }

    .nav-cell-white {
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: 100%;
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: absolute;

        .circles-container {
            position: relative;
            top: -17%;
            left: -60%;
            z-index: 1;
        }

        .circle {
            border-radius: 50%;
            position: absolute;
            background-color: #121111;
            box-shadow: inset 15px 15px 30px rgba(0, 0, 0, 0.2),
                inset -15px -15px 30px rgba(57, 55, 55, 0.8);
            border: 1px solid rgb(15, 15, 15);
        }

        #circle1 {
            width: 450px;
            height: 450px;
            top: 0;
            left: 0;


        }

        #circle2 {
            width: 350px;
            height: 350px;
            top: 25px;
            left: 25px;
        }

        #circle3 {
            width: 250px;
            height: 250px;
            top: 50px;
            left: 50px;
        }


        .link {
            margin-top: 5rem;
            z-index: 4;

            h1 {
                color: rgb(242, 238, 238);
                font-family: "Bebas Neue", sans-serif;
                font-weight: 400;
                font-style: normal;
                letter-spacing: 12px;
                font-size: 9vw;
                padding: 0.25em;
                text-shadow: 0 0 20px rgba(179, 179, 179, 0.8);
                margin-left: 2rem;

                &:last-child {
                    margin-bottom: 2rem;
                }

            }
        }



        .logo {
            display: block;
            width: 45%;
            position: absolute;
            bottom: 20px;
            left: 50%; 
            transform: translateX(-50%);
            display: flex;


            img {
                display: block;
                width: 100%;
                margin: 10px;
                padding: 6px;
                filter: drop-shadow(0px 0px 8px rgb(214, 209, 209));
            }

        }
    }
}
</style>
