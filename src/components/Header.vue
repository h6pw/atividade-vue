<template>
    <div class="titulo">
        <div class="textos">
          <h1>Patas do Vale</h1>
          <p>Portal de Adoção de Animais</p>
        </div>
        <img src="../icons/paw_dog.jpg" alt="Patinha de cachorro">
      </div>
      
      <nav class="menu">
         <RouterLink to="/">Inicio</RouterLink>
         <RouterLink to="/Animais">Animais</RouterLink>
         <RouterLink to="/Cuidados">Cuidados</RouterLink>
      </nav>
</template>

<style scoped>

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

</style>