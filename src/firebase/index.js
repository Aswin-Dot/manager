import firebase from "firebase/app";

const firebaseInitialization = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDdZ2hSTvb-FkPrIIu6Qit4dpM25KEZ6tA",
      authDomain: "manager-3ba61.firebaseapp.com",
      projectId: "manager-3ba61",
      storageBucket: "manager-3ba61.appspot.com",
      messagingSenderId: "424316765501",
      appId: "1:424316765501:web:abf8092c3801a28ebab154",
      measurementId: "G-S3HLJD0WZ7",
    };
    
    firebase.initializeApp(firebaseConfig);
}

export default firebaseInitialization;