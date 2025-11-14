<template>
  <div class="not-found">
    <div class="icons">
      <span class="icon danger">☢️</span>
      <span class="icon fire">🔥</span>
      <span class="icon skull">💀</span>
      <span class="icon bio">☣️</span>
      <span class="icon warning">⚠️</span>
    </div>

    <div class="content">
      <div class="face">
        <div class="eyes">
          <div class="eye left"></div>
          <div class="eye right"></div>
        </div>
        <div class="mouth"></div>
      </div>

      <h1>404</h1>
      <p>¡Ups! Parece que explotó la página 😱</p>
      <button @click="$router.push('/')">Volver a la seguridad 🏃‍♂️</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  position: relative;
  height: 100vh;
  background: radial-gradient(circle at center, #fff 40%, #fee2e2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Comic Sans MS', 'Segoe UI', sans-serif;
  color: #b91c1c;
}

/* === Iconos flotantes === */
.icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.icon {
  position: absolute;
  font-size: 2.5rem;
  animation: float 5s infinite ease-in-out;
  opacity: 0.8;
}

.danger {
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}
.fire {
  top: 20%;
  right: 20%;
  animation-delay: 0.5s;
}
.skull {
  bottom: 15%;
  left: 25%;
  animation-delay: 1s;
}
.bio {
  bottom: 25%;
  right: 15%;
  animation-delay: 1.5s;
}
.warning {
  top: 45%;
  left: 50%;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
  }
}

/* === Persona caricatura === */
.face {
  width: 120px;
  height: 120px;
  background: #fca5a5;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 0 0 4px #b91c1c;
}

.eyes {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 35px;
  left: 25px;
  width: 70px;
}

.eye {
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  border: 2px solid #b91c1c;
  position: relative;
  overflow: hidden;
}

.eye::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #b91c1c;
  border-radius: 50%;
  top: 7px;
  left: 7px;
  animation: eye-pop 0.8s infinite alternate;
}

@keyframes eye-pop {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.6) translate(3px, -3px);
  }
}

.mouth {
  width: 50px;
  height: 20px;
  background: #b91c1c;
  border-radius: 10px;
  position: absolute;
  bottom: 25px;
  left: 35px;
  transform: rotate(10deg);
}

/* === Texto === */
h1 {
  font-size: 6rem;
  font-weight: 900;
  color: #dc2626;
  text-shadow: 2px 2px 8px rgba(185, 28, 28, 0.3);
  margin: 0;
}

p {
  font-size: 1.2rem;
  color: #7f1d1d;
  margin-top: 10px;
}

/* === Botón === */
button {
  margin-top: 20px;
  background-color: #b91c1c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.1s,
    background-color 0.2s;
}

button:hover {
  background-color: #991b1b;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}
</style>
