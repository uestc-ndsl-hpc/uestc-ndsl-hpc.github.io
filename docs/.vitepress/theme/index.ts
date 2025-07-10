// .vitepress/theme/index.ts
import type { Theme } from 'vitepress' // 导入 Theme 类型
import DefaultTheme from 'vitepress/theme'

// 引入时间线样式 (保留)
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    // 使用 Glob Import 自动注册所有组件
    const components = import.meta.glob('../components/*.vue', { eager: true })
    for (const path in components) {
      const component = components[path]
      // 从路径中获取组件名 (e.g., ../../components/Image.vue -> Image)
      const name = path.match(/\/(\w+)\.vue$/)?.[1]
      if (name) {
        // 全局注册组件
        app.component(name, (component as any).default)
      }
    }
  }

} satisfies Theme // 使用 'satisfies Theme' 来获得类型提示和校验