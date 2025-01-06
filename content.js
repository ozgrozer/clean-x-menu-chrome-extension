/* global MutationObserver */

const visibleMenuItems = [
  'Home',
  'Notifications',
  'Direct Messages',
  'Grok',
  'Profile'
]

const hideMenuItems = () => {
  const menuItems = document
    .querySelectorAll('nav[aria-label="Primary"] a')
  menuItems.forEach(item => {
    const ariaLabel = item.getAttribute('aria-label')
    if (!visibleMenuItems.some(i => ariaLabel?.includes(i))) {
      item.style.display = 'none'
    }
  })
}

document.addEventListener('DOMContentLoaded', hideMenuItems)
const observer = new MutationObserver(hideMenuItems)
observer.observe(document.body, {
  subtree: true,
  childList: true
})
