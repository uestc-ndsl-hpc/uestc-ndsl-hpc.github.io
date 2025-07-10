<template>
  <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="slides-container">
      <transition name="fade" mode="out-in">
        <img 
          :key="currentIndex" 
          :src="currentImage.src" 
          :alt="currentImage.alt" 
          class="slide-image" 
        />
      </transition>
    </div>

    <button @click="prev" class="nav-button prev">&#10094;</button>
    <button @click="next" class="nav-button next">&#10095;</button>

    <div class="dots-container">
      <span
        v-for="(_, index) in images"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 定义图片类型
interface CarouselImage {
  src: string
  alt: string
}

// 组件属性定义
const props = defineProps({
  images: { 
    type: Array as () => CarouselImage[], 
    required: true 
  },
  autoplay: { type: Boolean, default: false },
  interval: { type: Number, default: 3000 }
})

// 响应式状态
const currentIndex = ref(0)
let autoplayTimer: number | null = null

// 计算当前显示的图片
const currentImage = computed(() => props.images[currentIndex.value])

// 导航方法
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const goTo = (index: number) => {
  currentIndex.value = index
}

// 自动播放控制
const startAutoplay = () => {
  if (props.autoplay && !autoplayTimer) {
    autoplayTimer = window.setInterval(next, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// 生命周期钩子
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.slides-container {
  aspect-ratio: 16 / 9; 
  background-color: #f0f0f0;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 导航按钮 */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.prev {
  left: 15px;
}

.next {
  right: 15px;
}

/* 指示点 */
.dots-container {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.dot.active {
  background-color: white;
}
</style> 