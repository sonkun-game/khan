<template>

  <div class="home-page" :style="{ backgroundImage: `url(${backgroundImg})` }">
    <SakuraEffect />
    <!-- SIDEBAR MENU -->
    <SidebarMenu :isOpen="sidebarOpen" @close="sidebarOpen = false" />

    <!-- HEADER -->
    <header class="app-header">
      <!-- Left: Hamburger menu -->
      <button class="menu-btn" @click="sidebarOpen = true">
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </button>

      <!-- Right: Avatar -->
      <button class="user-btn" @click="showUserMenu">
        <Image src="/home/cosmic_user_avatar.png" class="user-avatar-img" alt="User Profile"></Image>
      </button>
    </header>

    <div class="feature-cards-container">
      <!-- Top-Left: Gõ Mõ -->
      <div class="feature-bubble card-top-left" @click="navigateTo('/goMo')"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image src="/home/icon/goMo.png" class="card-icon-img" alt="Gõ Mõ"></Image>
        </div>
        <div class="card-title">Gõ Mõ</div>
      </div>

      <!-- Mid-Left: Hũ Tâm Sự -->
      <div class="feature-bubble card-mid-left" @click="navigateTo('/worry-jar')"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image src="/home/icon/hoTamSu.png" class="card-icon-img" alt="Hồ Tâm Sự"></Image>
        </div>
        <div class="card-title">Hồ Tâm Sự</div>
      </div>

      <!-- Top-Right: Phóng Đăng -->
      <div class="feature-bubble card-top-right" @click="navigateTo('/altar')"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image src="/home/icon/phongDang.png" class="card-icon-img" alt="Phóng Đăng"></Image>
        </div>
        <div class="card-title">Phóng Đăng</div>
      </div>

      <!-- Mid-Right: Thắp Nhang -->
      <div class="feature-bubble card-mid-right" @click="navigateTo('/altar')"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image src="/home/icon/thapNhang.png" class="card-icon-img" alt="Thắp Nhang"></Image>
        </div>
        <div class="card-title">Thắp Nhang</div>
      </div>

      <!-- Bottom-Center-Left: Huyền Học -->
      <div class="feature-bubble card-bottom-left" @click="navigateTo('/huyenHoc')"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image src="/home/icon/huyenHoc.png" class="card-icon-img" alt="Huyền Học"></Image>
        </div>
        <div class="card-title">Huyền Học</div>
      </div>

      <!-- Bottom-Center-Right: Linh Vật -->
      <div class="feature-bubble card-bottom-right" @click="navigateTo('/shop')"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image src="/home/icon/linhVat.png" class="card-icon-img" alt="Linh Vật"></Image>
        </div>
        <div class="card-title">Linh Vật</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
import backgroundImg from '../assets/phatNgoiHoaSenRes.png';
import bubbleImg from '../assets/bubble.png';
import SakuraEffect from '../components/effects/SakuraEffect.vue';
import SidebarMenu from '../components/SidebarMenu.vue';

const router = useRouter()
const { getUserEmail } = useAuth()
const sidebarOpen = ref(false)

const navigateTo = (path) => {
  if (path === '/altar' || path === '/divination' || path === '/shop') {
    alert('Tính năng đang phát triển 🙏')
  } else {
    router.push(path)
  }
}

const toggleMenu = () => {
  console.log('Menu toggled')
}

const showUserMenu = () => {
  console.log('User menu')
}

const getUserInitial = () => {
  const email = getUserEmail()
  return email ? email.charAt(0).toUpperCase() : 'U'
}
</script>

<style scoped src="./index.css"></style>
