<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <h1>Lo mas vendido</h1>
            </div>
        </div>
        <div class="row">
            <div class="col text-center text-aqua">
                <img src="../../assets/img/pasteles/pastelaleman.png" alt="">
                <h3>Pastel alemán</h3>
                <p >$250.00 MXN</p>
            </div>
            <div class="col text-center text-aqua">
                <img src="../../assets/img/pasteles/mostachon.png" alt="">
                <h4>Mostachón de fresa</h4>
                <p>$275.00 MXN</p>
            </div>
            <div class="col text-center text-aqua">
                <img src="../../assets/img/pasteles/diplomatico.png" alt="">
                <h4>Diplomático</h4>
                <p>$280.00 MXN</p>
            </div>
        </div>
        <div class="row">
            <div class="col text-center text-aqua">
                <img src="../../assets/img/pasteles/paytortuga.png" alt="">
                <h4>Pay tortuga</h4>
                <p>$295.00 MXN</p>
            </div>
            <div class="col text-center text-aqua">
                <img src="../../assets/img/pasteles/rollomango.png" alt="">
                <h4>Rollo de mango</h4>
                <p>$305.00 MXN</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pasteles: [
                    {
                        id: 1,
                        name: "Pastel Aleman",
                        precio: "$250.00",
                        img: "paytortuga.png"
                    },
                    { id: 2, name: "Mostachón de fresa", precio: "$275.00", img: 'paytortuga.png'},
                    { id: 3, name: "Diplomático", precio: "$280.00" , img: 'pastelaleman.png'},
                    { id: 4, name: "Pay Tortuga", precio: "$295.00" , img: 'mostachon.png'},
                    { id: 5, name: "Rollo Mango", precio: "$305.00" , img: 'paytortuga.png'},
                    { id: 6, name: "Pastel de chocolate", precio: "$275.00", img: 'paytortuga.png' },
                    { id: 7, name: "Rebanada de chocolate", precio: "$50.00" , img: 'paytortuga.png'},
                    { id: 8, name: "Rebanada de pastel", precio: "$50.00", img: 'paytortuga.png'},
                    { id: 9, name: "Pastel de bodas", precio: "$450.00" , img: 'paytortuga.png'}
                    ],
            }
        }
    }
</script>
<style scoped>
    .text-aqua p {
        color: var(--aqua)!important;
    }
</style>