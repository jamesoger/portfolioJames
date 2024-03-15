<template>
    <router-link style="text-decoration: none;width: 10vw; " :to="{ name: 'contact'}">
      <div ref="contactContainer" class="contact-container">
        <img ref="contactHello" class="contact-hello shake" src="/images/bonjour.png" alt="">
        <span ref="contactLink" class="contact-link-hello">Contactez-moi</span>
      </div>
    </router-link>
  </template>
  
  <style>
  .contact-container {
    position: relative;
    width: 30%;
    height: auto;
  }
  
  .contact-hello,
  .contact-link-hello {
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in-out;
  }
  
  .contact-hello {
    animation: shake 0.8s ease infinite;
  }
  
  .contact-link-hello {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgb(9, 9, 9);
    border-radius: 50%;
    line-height: 150px;
    font-size: 17px;
    color: rgb(255, 254, 254);
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
    
  }
  
  .contact-container:hover .contact-hello {
    opacity: 0;
  }
  
  .contact-container:hover .contact-link-hello {
    opacity: 1;
  }
  
  @keyframes shake {
  0% {
    transform: translate(-2px, -2px) rotate(0deg);
  }
  25% {
    transform: translate(1px, 1px) rotate(20deg);
  }
  50% {
    transform: translate(-2px, -2px) rotate(0deg);
  }
  75% {
    transform: translate(1px, 1px) rotate(20deg);
  }
  100% {
    transform: translate(-2px, -2px) rotate(0deg);
  }
}

@media screen and (max-width: 960px) {
    .contact-container {
      width: 20%;
      .contact-link-hello {
        line-height: 80px;
        width: 85px; 
        height: 85px;
        font-size: 12px; 
      }
    }
  }
@media screen and (max-width: 480px) {
    .contact-container {
      width: 12%;
      .contact-link-hello {
        line-height: 60px;
        width: 60px; 
        height: 60px;
        font-size: 8px; 
      }
    }
  }

  </style>
  
  <script>
 export default {
  mounted() {
    const contactContainer = this.$refs.contactContainer;
    const contactHello = this.$refs.contactHello;
    const contactLink = this.$refs.contactLink;

    setInterval(() => {
      contactContainer.classList.add('shake');
      setTimeout(() => {
        contactContainer.classList.remove('shake');
        setTimeout(() => {
          contactHello.style.opacity = '0'; 
          contactLink.style.opacity = '1'; 
          setTimeout(() => {
            contactHello.style.opacity = '1'; 
            contactLink.style.opacity = '0'; 
          }, 2000); // Réduction à 2 secondes
        }, 400);
      }, 3000); 
    }, 5000); 
  }
};



  </script>
  
  
  
  
  
  
  
  
  