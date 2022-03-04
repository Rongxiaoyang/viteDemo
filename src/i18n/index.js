import {createI18n} from 'vue-i18n'
import ZH from './message/ZNCH.js'
import EN from './message/EN.js'
const defaulelanguage =  'zh'
const i18n = createI18n({
  locale: defaulelanguage, // 设置地区s
  messages:{
    zh:ZH,
    en:EN
  }, // 设置地区信息
})
export default i18n