<script setup>
import { ref } from 'vue'
import CardPet from '../components/CardPet.vue'
import { pets } from '../data/pets'

const petAtual = ref(0)

function proximoPet() {
  petAtual.value = (petAtual.value + 1) % pets.length
}

function petAnterior() {
  petAtual.value = (petAtual.value - 1 + pets.length) % pets.length
}
</script>

<template>

  <main class="animais">

    <section class="titulo-pagina">

      <div class="etiqueta">
        Esperando uma família
      </div>

      <h1>Animais disponíveis</h1>

      <p>
        Conheça alguns dos animais que estão esperando por uma nova família.
      </p>

    </section>


    <section class="carrossel">

      <button
        class="botao-navegacao"
        @click="petAnterior"
      >
        <
      </button>


      <CardPet :pet="pets[petAtual]" />


      <button
        class="botao-navegacao"
        @click="proximoPet"
      >
        >
      </button>

    </section>


    <div class="contador">
      {{ petAtual + 1 }} / {{ pets.length }}
    </div>


    <section class="chamada-cuidados">

      <h2>Quer saber mais sobre adoção?</h2>

      <p>
        Antes de adotar, conheça alguns cuidados importantes.
      </p>

      <RouterLink to="/cuidados">
        Ver cuidados
      </RouterLink>

    </section>

  </main>

</template>

<style scoped>

.animais {
  width: 100%;
  min-height: 100vh;
  padding: 60px 40px;
  box-sizing: border-box;
  background-color: var(--cinza-claro);
}

.titulo-pagina {
  text-align: center;
  margin-bottom: 40px;
}

.etiqueta {
  display: inline-block;
  margin-bottom: 10px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: var(--verde-claro);
  color: var(--verde);
  font-size: 14px;
}

.titulo-pagina h1 {
  margin: 0 0 10px;
  color: var(--texto);
}

.titulo-pagina p {
  margin: 0;
  color: var(--cinza);
}


.carrossel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}


.botao-navegacao {
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background-color: var(--verde);
  color: var(--branco);
  font-size: 24px;
  cursor: pointer;
}

.botao-navegacao:hover {
  background-color: var(--verde-escuro);
  transform: scale(1.05);
}


.contador {
  text-align: center;
  margin-top: 15px;
  color: var(--cinza);
}


.chamada-cuidados {
  text-align: center;
  margin-top: 60px;
}

.chamada-cuidados h2 {
  color: var(--texto);
}

.chamada-cuidados p {
  color: var(--cinza);
}

.chamada-cuidados a {
  display: inline-block;
  margin-top: 10px;
  color: var(--verde);
}

</style>