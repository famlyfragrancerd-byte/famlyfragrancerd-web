importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Configuración de tu proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmlMj1m1KNZlkNVcqWMGRBeFujAQySDvM",
    authDomain: "famlyfragrancerd.firebaseapp.com",
    projectId: "famlyfragrancerd",
    storageBucket: "famlyfragrancerd.firebasestorage.app",
    messagingSenderId: "575510984505",
    appId: "1:575510984505:web:bbb460ccf8aa892f18dae8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Mostrar la notificación en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensaje recibido en segundo plano.', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://raw.githubusercontent.com/famlyfragrancerd-byte/famlyfragrancerd-web/54362eb6b882b258af2a8d6f066984c090a95436/logo%20png%20famly.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
