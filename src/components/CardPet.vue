<script setup>
defineProps({
  pet: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="card-pet">

    <img
      class="imagem-pet"
      :src="pet.imagem"
      :alt="`Foto de ${pet.nome}`"
    >

    <div class="info-pet">

      <div class="nome-pet">

        <h2>{{ pet.nome }}</h2>

        <span class="especie-pet">
          <i class="fa-solid fa-paw"></i>
        </span>

      </div>

      <div class="dados-pet">
        <span>{{ pet.idade }}</span>
        <span>{{ pet.porte }}</span>
      </div>

      <p>
        {{ pet.descricao }}
      </p>

      <strong>
        Comportamento: {{ pet.comportamento }}
      </strong>

    </div>

  </article>
</template>

<style scoped>

.card-pet {
  width: 100%;
  max-width: 500px;
  background-color: var(--branco);
  border-radius: var(--raio);
  overflow: hidden;
  box-shadow: var(--sombra);

  border: 4px solid #176b57;
  border-radius: 22px;
}

.imagem-pet {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.info-pet {
  padding: 24px;
}

.nome-pet {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.nome-pet h2 {
  margin: 0;
}

.especie-pet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--verde-claro);
  color: var(--verde);
  font-size: 15px;
}

.dados-pet {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.dados-pet span {
  padding: 5px 10px;
  border-radius: 20px;
  background-color: var(--verde-claro);
  color: var(--verde);
  font-size: 14px;
}

.info-pet p {
  margin: 0 0 15px;
}

.info-pet strong {
  font-size: 14px;
}

</style>