import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdUsGHwAeVF-d8NQs40hEoGHhJmYirm-M",
  authDomain: "jahid-mobile-shop.firebaseapp.com",
  projectId: "jahid-mobile-shop",
  storageBucket: "jahid-mobile-shop.firebasestorage.app",
  messagingSenderId: "501758307554",
  appId: "1:501758307554:web:4ff36dad0e3508478782bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {

  const productBox = document.getElementById("products");

  let html = "";

  const snapshot = await getDocs(collection(db, "products"));

  snapshot.forEach((doc) => {

    const p = doc.data();

    html += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>৳ ${p.price}</p>

        <button onclick="addToCart('${doc.id}')">
          Add To Cart
        </button>
      </div>
    `;

  });

  productBox.innerHTML = html;

}

window.addToCart = function(id){
  alert("Product Added To Cart");
};

loadProducts();
