<template>
    <div class="container">
        <div class="text-center">
        <button class="animate__animated  button__inactive d-inline mt-5"
        :class="{'button__active': selectedCollection == buttons.one, 'animate__rubberBand': selectedCollection == buttons.one,
        'animate__pulse': hover1 == true}"
        @mouseover="hover1 = true"
        @mouseleave="hover1 = false"
        @click="handleClick(buttons.one)"
        ><h1>Cumpleaños</h1>
        <svg v-if="selectedCollection == buttons.one" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:white;" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        <svg
        v-if="selectedCollection != buttons.one" 
        width="24" height="24" style="fill:white;" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
        </button>

        <button class=" animate__animated button__inactive d-inline mt-5"
        :class="{'button__active': selectedCollection == buttons.two, 'animate__rubberBand': selectedCollection == buttons.two,
        'animate__pulse': hover2 == true}"
        @click="handleClick(buttons.two)"
        @mouseover="hover2 = true"
        @mouseleave="hover2 = false"
        ><h1>Eventos</h1>
        <svg v-if="selectedCollection == buttons.two" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:white;" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        <svg
        v-if="selectedCollection != buttons.two" 
        width="24" height="24" style="fill:white;" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
        </button>

        <button class="animate__animated button__inactive d-inline mt-5"
        :class="{'button__active': selectedCollection == buttons.three , 'animate__rubberBand': selectedCollection == buttons.three,
        'animate__pulse': hover3 == true}"
        @click="handleClick(buttons.three)"
        @mouseover="hover3 = true"
        @mouseleave="hover3 = false"
        ><h1>Tradicionales</h1>
        <svg v-if="selectedCollection == buttons.three" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:white;" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        <svg
        v-if="selectedCollection != buttons.three" 
        width="24" height="24" style="fill:white;" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
        </button>

    </div>
<div class="mt-5">
    <transition enter-active-class="animate__animated animate__lightSpeedInRight"
                leave-active-class="animate__animated animate__lightSpeedOutLeft"
                mode="out-in">
                    <app-cumpleanos v-if="selectedCollection == buttons.one"></app-cumpleanos>
                    <app-eventos v-if="selectedCollection == buttons.two"></app-eventos>
                    <app-tradicionales v-if="selectedCollection == buttons.three"></app-tradicionales>
    </transition>
</div>



</div>


</template>


<script>
import Cumpleanos from './cumpleCollection.vue'
import Eventos from './eventosCollection.vue'
import Tradicionales from './tradicionalesCollection.vue'


export default {
    components: {
        appCumpleanos: Cumpleanos,
        appEventos: Eventos,
        appTradicionales: Tradicionales
    },
    data() {
        return {
            hover1: false,
            hover2: false,
            hover3: false,
            service : 1,
            selectedCollection: "1",
            buttons:{
                one: "1",
                two: "2",
                three: "3"
            },
        }
    },
    methods: {
        handleClick(button){
            this.selectedCollection = button
        }
    }
}
</script>

<style>
.button__active {
    padding: 4px 10px;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none!important;
    outline:none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: var(--bg)!important;
}
.button__inactive {
    padding: 4px 20px;
    border-radius: 8px;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none!important;
    outline:none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: var(--bg)!important;
}
.button__active:hover {
    background-color: var(--orange);
}
:root {
  --animate-duration: 300ms;
  --animate-delay: 0.2s;
}
@media (max-width: 650px) {
    button {
         margin-top: 20px;
    }
}


</style>