<template>
    <div>
        <!-- Overlay khi sidebar mở -->
        <Transition name="overlay">
            <div v-if="isOpen" class="sidebar-overlay" @click="close"></div>
        </Transition>

        <!-- Sidebar -->
        <Transition name="slide">
            <div v-if="isOpen" class="sidebar">
                <div class="sidebar-header">
                    <span class="sidebar-title">☸ Tính năng</span>
                    <button class="close-btn" @click="close">✕</button>
                </div>
                <nav class="sidebar-nav">
                    <a class="nav-item" v-for="item in menuList" @click="goTo(item.path)">
                        <span class="nav-icon">{{ item.icon }}</span>
                        <span class="nav-label">{{ item.name }}</span>
                        <span v-if="item.status != 'done'" class="nav-badge">Sắp ra mắt</span>
                    </a>
                </nav>
                <div class="sidebar-footer">
                    <a class="nav-item logout" @click="handleLogout">
                        <span class="nav-icon">🚪</span>
                        <span class="nav-label">Đăng xuất</span>
                    </a>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const menuList = [
    {
        path: "/home",
        icon: "🏠",
        name: "Trang chủ",
        status: "done",
    },
    {
        path: "/goMo",
        icon: "🔔",
        name: "Gõ Mõ",
        status: "done",
    },
    {
        path: "",
        icon: "🕯️",
        name: "Thắp Hương",
        status: "process",
    },
    {
        path: "",
        icon: "🏮",
        name: "Phóng Đăng",
        status: "process",
    },
    {
        path: "",
        icon: "🏺",
        name: "Hồ Tâm Sự",
        status: "process",
    },
    {
        path: "",
        icon: "🔮",
        name: "Huyền Học",
        status: "process",
    },
    {
        path: "",
        icon: "🐉",
        name: "Linh Vật",
        status: "process",
    },
]

const emit = defineEmits(['close'])
const router = useRouter();

const close = () => {
    emit('close')
}

const goTo = (path) => {
    if (path != "") {
        close()
        router.push(path)
    }
}

const handleLogout = () => {
    close()
    localStorage.removeItem('jwt_token')
    localStorage.removeItem('spiritual-stats')
    router.push('/login')
}
</script>

<style scoped>
/* Overlay */
.sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    backdrop-filter: blur(2px);
}

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, #2a1810 0%, #1a0f09 100%);
    border-right: 1px solid rgba(212, 175, 55, 0.3);
    z-index: 999;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

/* Header */
.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.25rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.sidebar-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #d4af37;
    letter-spacing: 1px;
}

.close-btn {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

/* Navigation */
.sidebar-nav {
    flex: 1;
    padding: 0.75rem 0;
    overflow-y: auto;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1.25rem;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    position: relative;
}

.nav-item:hover:not(.disabled) {
    background: rgba(212, 175, 55, 0.1);
    color: #d4af37;
}

.nav-item.active {
    background: rgba(212, 175, 55, 0.15);
    color: #d4af37;
    border-left: 3px solid #d4af37;
}

.nav-item.disabled {
    opacity: 0.45;
    cursor: not-allowed;
}

.nav-icon {
    font-size: 1.25rem;
    width: 28px;
    text-align: center;
}

.nav-label {
    font-size: 0.95rem;
    font-weight: 500;
}

.nav-badge {
    margin-left: auto;
    font-size: 0.65rem;
    padding: 2px 8px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Footer */
.sidebar-footer {
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    padding: 0.5rem 0;
}

.nav-item.logout:hover {
    background: rgba(220, 53, 69, 0.15);
    color: #ff6b6b;
}
</style>
