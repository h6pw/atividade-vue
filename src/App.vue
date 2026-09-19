<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <div class="aplication">
    <header>
      <Header />
    </header>

    <!-- Envolto em um container flexível para empurrar o footer -->
    <main class="conteudo-principal">
      <RouterView />
    </main>

    <footer class="rodape">
      <p>Projeto desenvolvido Por Carlos Eduardo e Matheus Czubka</p>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap');

:root {
  --verde: #21745d;
  --verde-escuro: #17634f;
  --verde-claro: #e9f4f0;
  --branco: #ffffff;
  --cinza: #66716d;
  --cinza-claro: #f4f7f6;
  --texto: #285d4f;
  --sombra: 0 2px 8px rgba(0, 0, 0, 0.08);
  --raio: 8px;

  font-family: Arial, Helvetica, sans-serif;
  color: var(--texto);
  background: var(--cinza-claro);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.aplication {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.conteudo-principal {
  flex: 1;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  background-color: #21745d;
}

footer {
  display: flex;
  background-color: #21745d;
  color: #ffffff;
  font-family: "Comic Relief", system-ui;
  font-weight: 500;
  justify-content: center;
  padding: 20px;
}
</style>