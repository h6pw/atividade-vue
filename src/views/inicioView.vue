<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

import cachorro1 from '../images/cachorro-gosta-de-carinho-pet-2.jpg'
import cachorro2 from '../images/cachorro_2.jpg'
import cachorro3 from '../images/chachorro_3.jpg'

const onSwiper = (swiper) => {
  console.log('Swiper iniciado:', swiper)
}

const onSlideChange = () => {
  console.log('Slide alterado')
}
</script>

<template>
  <section class="container-adocao">

    <!-- Área principal -->
    <div class="juntar">

      <!-- Texto -->
      <div class="texto">

        <span class="badge">
          Adoção responsável
        </span>

        <h1>
          Encontre um novo amigo
        </h1>

        <p>
          O Patas do Vale apresenta animais que procuram uma família.
          Nosso objetivo é incentivar a adoção responsável e oferecer
          informações básicas para futuros tutores.
        </p>

        <p>
          Conheça os animais disponíveis e descubra como se preparar
          para receber um novo companheiro.
        </p>

        <div>
          <RouterLink to="/animais" class="btn-conhecer">
            Conhecer os animais
          </RouterLink>
        </div>

      </div>

      <!-- Carrossel -->
      <div class="imagem-wrapper">

        <Swiper
          :modules="[Autoplay]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          class="mySwiper"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >

          <SwiperSlide>
            <img
              :src="cachorro1"
              alt="Cachorro disponível para adoção"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              :src="cachorro2"
              alt="Cachorro disponível para adoção"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              :src="cachorro3"
              alt="Cachorro disponível para adoção"
            />
          </SwiperSlide>

        </Swiper>

      </div>

    </div>

<!-- Cards -->
<div class="cards">

  <div class="card">

    <div class="card-icon">
      <i class="fa-solid fa-dog"></i>
    </div>
    
    <p class="titulo-card">
      Adoção consciente
    </p>

    <p class="texto-card">
      Adotar exige responsabilidade, cuidado e planejamento.
    </p>

  </div>

  <div class="card">
    <div class="card-icon">
      <i class="fa-solid fa-heart"></i>
    </div>

    <p class="titulo-card">
      Animais acolhidos
    </p>

    <p class="texto-card">
      Todos os animais recebem atenção enquanto aguardam uma família.
    </p>

  </div>

  <div class="card">
    <div class="card-icon">
      <i class="fa-solid fa-house"></i>
    </div>

    <p class="titulo-card">
      Nova família
    </p>

    <p class="texto-card">
      Uma adoção responsável pode transformar diferentes vidas.
    </p>

  </div>

</div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&family=Inter:wght@400;500;600;700&display=swap');

:global(:root) {
  --verde: #21745d;
  --verde-escuro: #17634f;
  --verde-claro: #e9f4f0;
  --branco: #ffffff;
  --cinza: #66716d;
  --cinza-claro: #f4f7f6;
  --texto: #285d4f;
  --sombra: 0 2px 8px rgba(0, 0, 0, 0.08);
  --raio: 8px;
}

/* =========================
   CONTAINER
========================= */

.container-adocao {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 40px 100px;

  box-sizing: border-box;

  font-family: 'Comic Relief', system-ui, sans-serif;

  color: var(--texto);
  background: var(--cinza-claro);
}

/* =========================
   ÁREA PRINCIPAL
========================= */

.juntar {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 40px;

  margin-bottom: 4%;
}

/* =========================
   TEXTO
========================= */

.texto {
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;
}

.texto h1 {
  font-size: 2.5rem;
}

.texto p {
  font-size: 1.2rem;
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

  margin: 4px 0 8px;

  font-family: 'Comic Relief', system-ui, sans-serif;
}

p {
  color: #66716d;

  font-size: 0.95rem;
  line-height: 1.5;

  margin: 0;

  font-family: 'Comic Relief', system-ui, sans-serif;
}

/* =========================
   BOTÃO
========================= */

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

  transition: 0.2s ease;
}

.btn-conhecer:hover {
  background-color: #21745d;

  transform: translateY(-2px);

  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.12);
}

/* =========================
   SWIPER
========================= */

.imagem-wrapper {
  flex: 1;

  display: flex;

  justify-content: flex-end;

  min-width: 0;

}

.mySwiper {
  width: 100%;

  max-width: 500px;

  overflow: hidden;

  border-radius: 16px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  border: 4px solid #176b57;
  border-radius: 22px;
}

.mySwiper img {
  display: block;

  width: 100%;
  height: 350px;

  object-fit: cover;

  border-radius: 16px;
}

/* =========================
   CARDS
========================= */

.cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  width: 100%;
}

.card {
  width: 100%;
  max-width: 320px;

  padding: 25px 75px 25px 40px;
  box-sizing: border-box;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: var(--sombra);
  transition: transform 0.2s ease;

  border: 2px solid #176b57;
  border-radius: 22px;

  position: relative;
}

.card-icon {
  position: absolute;
  top: 20px;
  right: 20px;

  width: 45px;
  height: 45px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #17634f;
  color: #e9f4f0;
}

.card:hover {
  transform: scale(1.05);
}

.titulo-card {
  margin-bottom: 22px;
  min-height: 58px;
  margin: 0 0 10px 0;

  color: #21745d;

  font-size: x-large;

  font-weight: 600;
}

.texto-card {
  margin: 0;

  color: #66716d;

  font-size: medium;

  font-weight: 500;
}

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .container-adocao {
    padding: 40px 50px;
  }

  .juntar {
    gap: 30px;
  }

  h1 {
    font-size: 2rem;
  }

  .mySwiper img {
    height: 300px;
  }

  .cards {
    gap: 16px;
  }
}

/* =========================
   CELULAR
========================= */

@media (max-width: 768px) {

  .container-adocao {
    padding: 30px 25px;
  }

  .juntar {
    flex-direction: column;

    align-items: stretch;

    gap: 30px;
  }

  .texto {
    width: 100%;
  }

  h1 {
    font-size: 1.9rem;
  }

  .imagem-wrapper {
    width: 100%;

    justify-content: center;
  }

  .mySwiper {
    max-width: 100%;
  }

  .mySwiper img {
    height: 300px;
  }

  .cards {
    flex-direction: column;

    align-items: center;

    gap: 16px;
  }

  .card {
    max-width: 100%;
  }
}

/* =========================
   CELULAR PEQUENO
========================= */

@media (max-width: 480px) {

  .container-adocao {
    padding: 25px 18px;
  }

  h1 {
    font-size: 1.7rem;
  }

  p {
    font-size: 0.9rem;
  }

  .btn-conhecer {
    width: 100%;

    box-sizing: border-box;

    text-align: center;
  }

  .mySwiper img {
    height: 240px;
  }
}
</style>
