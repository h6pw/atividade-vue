<script setup></script>

<template>
  <div class="aplication">
    <header>
      <div class="titulo">
        <div class="textos">
          <h1>Patas do Vale</h1>
          <p>Portal de Adoção de Animais</p>
        </div>
        <img src="./icons/paw_dog.jpg" alt="Patinha de cachorro">
      </div>
      
      <nav class="menu">
         <RouterLink to="/">Inicio</RouterLink>
         <RouterLink to="/Animais">Animais</RouterLink>
         <RouterLink to="/Cuidados">Cuidados</RouterLink>
      </nav>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #21745d;
}

.titulo {
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 500;
  font-family: "Comic Relief", system-ui;
  color: #ffffff;
  padding: 15px;
}

.textos {
  display: flex;
  flex-direction: column;
}

.textos h1,
.textos p {
  margin: 0;
}

.titulo img {
  width: 50px;
  height: 50px;
}

nav {
  display: flex;
  align-items: center;
  padding-right: 30px;
  gap: 30px;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-family: "Comic Relief", system-ui;
  font-weight: 500;
  border: 1px solid transparent;
  padding: 4px;
  border-radius: 5px;
  transition: 0.5s;
}

a:hover {
  border-color: #17634f;
  background-color: #17634f;
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