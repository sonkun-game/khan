<template>
    <div class="incense-container">
        <!-- Smoke particles -->
        <div class="smoke-wrapper">
            <div class="smoke smoke-1"></div>
            <div class="smoke smoke-2"></div>
            <div class="smoke smoke-3"></div>
        </div>
        <!-- Incense burner image -->
        <Image src="decor/bat_huong.png" :alt="alt" :width="width" class="incense-image" />
    </div>
</template>

<script setup>
defineProps({
    width: {
        type: [Number, String],
        default: 100
    },
    alt: {
        type: String,
        default: 'Bát hương'
    }
});
</script>

<style scoped>
.incense-container {
    position: relative;
    display: inline-block;
}

.incense-image {
    position: relative;
    z-index: 1;
}

.smoke-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 150%;
    pointer-events: none;
    z-index: 2;
}

.smoke {
    position: absolute;
    bottom: 70%;
    width: 8px;
    height: 60px;
    background: linear-gradient(
        to top,
        rgba(200, 200, 200, 0.6) 0%,
        rgba(180, 180, 180, 0.4) 30%,
        rgba(160, 160, 160, 0.2) 60%,
        rgba(140, 140, 140, 0) 100%
    );
    border-radius: 50%;
    filter: blur(3px);
    opacity: 0;
    animation: smokeRise 3s ease-out infinite;
}

.smoke-1 {
    left: 35%;
    animation-delay: 0s;
}

.smoke-2 {
    left: 50%;
    animation-delay: 1s;
}

.smoke-3 {
    left: 65%;
    animation-delay: 2s;
}

@keyframes smokeRise {
    0% {
        opacity: 0;
        transform: translateY(0) scaleX(1) scaleY(1);
    }
    10% {
        opacity: 0.7;
    }
    50% {
        opacity: 0.5;
        transform: translateY(-40px) scaleX(1.5) scaleY(1.2);
    }
    100% {
        opacity: 0;
        transform: translateY(-100px) scaleX(2.5) scaleY(1.5);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .smoke {
        width: 6px;
        height: 40px;
    }
}

@media (max-width: 480px) {
    .smoke {
        width: 4px;
        height: 30px;
    }
}
</style>
