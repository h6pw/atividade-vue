<template>
  <section class="container-adocao">
    <div class="juntar">
      <div class="texto">
        <span class="badge">Adoção responsável</span>
        <h1>Encontre um novo amigo</h1>
        <p>
          O Patas do Vale apresenta animais que procuram uma família. Nosso
          objetivo é incentivar a adoção responsável e oferecer informações
          básicas para futuros tutores.
        </p>
        <p>
          Conheça os animais disponíveis e descubra como se preparar para
          receber um novo companheiro.
        </p>
        <div>
          <a href="#" class="btn-conhecer">Conhecer os animais</a>
        </div>
      </div>
      <div class="imagem-wrapper">
        <img
          src="../images/cachorro-gosta-de-carinho-pet-2.jpg"
          alt="Imagens cachorro 1"
        />
      </div>
    </div>

    <div class="cards">
      <div class="card_1">
        <p class="titulo_card">Adoção consciente</p>
        <p class="texto_card">
          adotar exige responsabilidade, cuidado e planejamento.
        </p>
      </div>
      <div class="card_2">
        <p class="titulo_card">Animais acolhidos</p>
        <p class="texto_card">
          Todosos animais recebem atenção enquanto aguardam uma familia.
        </p>
      </div>
      <div class="card_3">
        <p class="titulo_card">Nova familia</p>
        <p class="texto_card">
          Uma adoção responsável pode transformar diferentes vidas
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
.container-adocao {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 100px;
  font-family: "Comic Relif", system-ui;
  color: #555555;
}

.juntar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 4%;
}

.texto {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.badge {
  display: inline-block;
  background-color: #e2f0eb;
  color: #21745d;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
}

h1 {
  color: #17634f;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 4px 0 8px 0;
  font-family: "Comic Relif", system-ui;
}

p {
  font-family: "Comic Relif", system-ui;
  color: #66716d;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

.btn-conhecer {
  display: inline-block;
  margin-top: 8px;
  background-color: #17634f;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: 0.2s;
}

.btn-conhecer:hover {
  padding: 14px 26px;
}

.imagem-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.imagem-wrapper img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  object-fit: cover;
}

@media (max-width: 768px) {
  .juntar {
    flex-direction: column;
  }

  .imagem-wrapper img {
    max-width: 100%;
  }
}

.cards {
    display: flex;
    justify-content: center;
    gap: 16%;
}
.titulo_card {
    font-family: "Comic Relif", system-ui;
    font-weight: 600;
    color: #21745d;
    font-size: large;
}
.texto_card {
    font-family: "Comic Relif", system-ui;
    font-weight: 500;
    font-size: medium;
}
.card_1,
.card_2,
.card_3{
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;
    width: 20%;
}
</style>
