import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "arch-dark" | "arch-light" | "dark" | "light" | "mobile-app-dark" | "mobile-app-light"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}