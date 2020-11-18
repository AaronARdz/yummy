<template>
    <header class="sticky-top nav">
            <router-link to="/" v-if="!isMobile">
            <img class="logo" src="../../assets/img/logo.png" alt="logo Technobit">
            </router-link>
        <div class="burger sticky-top"  @click="toggleMobile">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <img class="logo" v-if="isMobile" src="../../assets/img/logo.png" alt="logo Technobit">
        </div>
        
        <transition enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                    mode="out-in">
        <div v-if="!isMobile || toggleMenu">
        <nav>
            <ul class="nav__links">
                <router-link to="/">
                    <li @click="toggleMenu = false">
                        <a>Inicio</a>
                        </li>
                </router-link>
                <router-link to="/Nosotros">
                    <li @click="toggleMenu = false">
                        <a>Nosotros</a>
                        </li>
                </router-link>
              <router-link to="/Productos">
                <li @click="toggleMenu = false">
                  <a>Productos</a>
                </li>
              </router-link>
                <router-link to="/Contacto">
                    <li @click="toggleMenu = false">
                        <a>Contacto</a>
                        </li>
                </router-link>
              <router-link to="/Carrito">
                <li @click="toggleMenu = false">
                  <a><img src="../../assets/img/CART.png" width="40" height="40" /></a>
                </li>
              </router-link>
              <router-link to="/Login" v-if="!user">
                <li @click="toggleMenu = false">
                  <a><img src="../../assets/img/user.png" width="40" height="40" /></a>
                </li>
              </router-link>
                <router-link to="/auth" v-if="user">
                    <li @click="toggleMenu = false">
                        <a>Home</a>
                        </li>
                </router-link>
            </ul>
        </nav>
        </div>
        </transition>

    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            hover: false,
            toggleMenu: false,
            isDropped: false
        }
    },
    methods: {
        toggleMobile() {
            console.log(this.toggleMenu)
            this.toggleMenu = !this.toggleMenu; 
        }
    },
    created() { 
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        })
    },
    computed: {
        ...mapState(['user']),
        isMobile() {
            return this.windowWidth <= 768
        }
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
li, a, button {
    font-weight: 500;
    font-size: 16px;
    color: var(--bg);
    text-decoration: none;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10%;
}
@media (max-width: 768px) {
    header {
         padding: 1em;
         display: block;
         text-align: center;
    }
    li,a {
        padding: 1em;
        display: block;
        margin-right: auto!important;
        margin-left: auto!important;
        width: 100%;
    }
    .line {
        width: 48px;
        height: 6px;
        background: var(--orange);
        margin: 5px;
    }
    .burger {
        cursor: pointer;
    }
    .logo {
        position: absolute;
        top: -30%;
        left: 20%;
        margin-bottom: 20px;
    }

}
.hidden {
    display: none;
}

.logo {
    cursor: pointer;
    max-width: 60px;
    height: auto;
}
.nav__links {
    list-style: none;
}

.nav__links li {
    display: inline-block;
    padding: 0px 10px;
}
.nav__links li button {
    transition: all 0.3s ease 0s;
    
}
.nav__links li button:hover {
    color: var(--orange);
    background: none!important;
}
.dropdown-links button {
    margin: 10px
}
.show-dropdown {
    position: absolute; 
    transform: translate3d(0px, 58px, 0px);
    top: 0px; 
    left: 0px;
    will-change: transform;
}
.dropdown-menu {
    background-color: transparent!important;
    border: none!important;
}
.nav {
    background-color: var(--orange);
}

</style>