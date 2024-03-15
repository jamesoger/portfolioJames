<template>
    <div class="arrow" @click="scrollToTop">
        <img src="/images/fleches-vers-le-haut.png" alt="">
    </div>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'  
            });
        }
    }
};
</script>

<style lang="scss">
.arrow {
    position: fixed;
    bottom: 10px;
    right: 10px; 
    cursor: pointer;  
    img {
    width: 60px;
}
}


</style>
