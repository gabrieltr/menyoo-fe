<template>
  <div class="authentication-container">
    <div class="elements">
      <div class="plate"></div>
      <div class="authenticators">
        <div @click="signInFacebook" class="authenticator-item facebook">Entre com Facebook</div>
        <div @click="signInGoogle" class="authenticator-item google">Entre com Google</div>
        <div @click="signInEmail" class="authenticator-item menyoo-account">Entre com Email</div>
      </div>
      <div class="menyoo-slogan"></div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    signInFacebook: function signInFacebook() {
      this.$store.dispatch('signInFacebook');
      this.$router.push(this.$route.query.redirect || '/restaurantes/bar-do-ze');
    },
    signInGoogle: function signInGoogle() {
      this.$store.dispatch('signInGoogle');
      this.$router.push(this.$route.query.redirect || '/restaurantes/bar-do-ze');
    },
    signInEmail: function signInEmail() {
      this.$store.dispatch('signInEmail');
      this.$router.push(this.$route.query.redirect || '/restaurantes/bar-do-ze');
    },
  },
};
</script>

<style>
  @import '../assets/styles/authentication.css'
</style>
