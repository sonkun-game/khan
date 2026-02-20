<template>
  <!-- Body -->
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <!-- SIDEBAR MENU -->
    <SidebarMenu :isOpen="sidebarOpen" @close="sidebarOpen = false" />
    <button class="goMo-menu-btn" @click="sidebarOpen = true">
      <span class="goMo-menu-line"></span>
      <span class="goMo-menu-line"></span>
      <span class="goMo-menu-line"></span>
    </button>
    <slot></slot>
  </ClientOnly>
</template>

<script setup>
import SidebarMenu from '~/components/SidebarMenu.vue';

const sidebarOpen = ref(false);

</script>

<style scoped>
/* Hamburger menu button */
.goMo-menu-btn {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  background: rgba(58, 38, 20, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.goMo-menu-btn:hover {
  background: rgba(58, 38, 20, 0.9);
  border-color: rgba(212, 175, 55, 0.5);
}

.goMo-menu-line {
  display: block;
  width: 20px;
  height: 2px;
  background: #d4af37;
  border-radius: 2px;
}
</style>
