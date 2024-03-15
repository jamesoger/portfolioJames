<template>
    <div class="component">
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
  
  <style lang="scss">
  .component {
    position: fixed;
    top: 50%;
    right: 0%;
    transform: translate(50%, -50%);
    background-color: rgba(199, 192, 192, 0.89);
    width: 140px;
    height: auto; 
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    max-height: 80vh; 
    overflow: hidden;
  }
  
  .logo {
    margin: 1rem;
  
    a {
      display: block;
      margin-bottom: 12px;
    }
  
    img {
      width: 45%;
      height: auto;
      transition: box-shadow 0.3s ease, filter 0.3s ease;
      object-fit: contain; 
    }
  
    img:hover {
      filter: drop-shadow(0px 0px 7px rgba(46, 45, 45, 0.817)) brightness(1.5);
    }
  }
  
  .component:hover {
    background-color: white;
  }
  
  /* Media query for mobile devices */
  @media screen and (max-width: 960px) {
    .component {
      display: none;
    }
  }
  </style>
  

  
