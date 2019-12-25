import defaultSettings from '@/settings'

const title = defaultSettings.title || '小提莫后台管理-读书系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
