<template>
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Name" required>
    <label for="mail">E-mail</label>
    <input type="email" id="mail" name="email" placeholder="E-mail" required>
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Message" rows="10" required></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  @import '../assets/styles/form.scss';
</style>
