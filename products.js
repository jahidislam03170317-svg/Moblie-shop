import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "jahid-mobile-shop.firebaseapp.com",
  projectId: "jahid-mobile-shop",
  storageBucket: "jahid-mobile-shop.firebasestorage.app",
  messagingSenderId: "501758307554",
  appId: "1:501758307554:web:4ff36dad0e3508478782bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const snap = await getDocs(collection(db, "products"));

  snap.forEach((doc) => {

    const p = doc.data();

    productList.innerHTML += `
      <div class="box">
        <img src="${p.image}" width="120">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: ৳${p.price}</p>
      </div>
    `;
  });

}

loadProducts();
