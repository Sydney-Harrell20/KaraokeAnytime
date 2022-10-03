import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { useUserAuth } from '../../contexts/AuthContext';
import { getAuth } from "firebase/auth";
import { db } from "../../Modules/firebaseModule";


export async function writeData(username, email) {
    try {
        const docRef = await setDoc(doc(db, "users", email), {
            Username: username,
            Email: email
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

export async function getName(email) {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    return docSnap.get("Username").toString();
    console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}
export default writeData;

