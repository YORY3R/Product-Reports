if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/product-reports/sw.js', { scope: '/product-reports/' })})}