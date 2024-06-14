// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { toast, Bounce } from "react-toastify";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts() {
  const response = await getDocs(collection(db, "products"));
  console.log(response);

  //response es un QuerySnapShot y es iterable
  const listaProds = [];
  response.forEach((docu) => listaProds.push({ id: docu.id, ...docu.data() }));
  return listaProds;
}

export async function filterProductsByCategory(category) {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );
  const response = await getDocs(q);
  const listaFiltroCategory = [];
  response.forEach((docu) =>
    listaFiltroCategory.push({ id: docu.id, ...docu.data() })
  );
  return listaFiltroCategory;
}


export async function filterProductsById(prodId) {
  const q = query(collection(db, "products"), where("id", "==", prodId));
  const response = await getDocs(q);
  const listaFiltroId = [];
  response.forEach((docu) =>
    listaFiltroId.push({ id: docu.id, ...docu.data() })
  );
  return listaFiltroId;
}

//enviar una nueva orden de pedido
export async function addOrder(order){
  const ordersColletions = collection(db, 'orders');
  const docRef = await addDoc(ordersColletions, order);

  notifyPurchaseOreder(docRef.id)

  return docRef.id
}

const notifyPurchaseOreder = (orderId) => {
  toast.success(`Successful purchase, your Order is: " ${orderId} "`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
    
    }