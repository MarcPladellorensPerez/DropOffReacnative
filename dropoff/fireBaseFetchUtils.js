import 'firebase/firestore';
import {db} from './firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
class FirebaseFetchUtils {
    async fetchBusinessData(userLoginId, listId) {
        const businessRef = doc(db, 'businesses', userLoginId);
        try {
            const docSnap = await getDoc(businessRef);
            if (docSnap.exists()) {
                return docSnap.get(listId);
            } else {
                console.log(`No such document for user ID: ${userLoginId}`);
                return null;
            }
        } catch (error) {
            console.error(`Failed to fetch document for user ID: ${userLoginId}`, error);
            return null;
        }
    }

    async fetchFieldData(listIds, collectionName) {
        try {
            const collectionRef = collection(db, collectionName);
            const tasks = listIds.map(itemId => getDoc(doc(collectionRef, itemId)));
            const docs = await Promise.all(tasks);
            const itemList = [];
            const itemIdList = [];
            docs.forEach(docSnap => {
                if (docSnap.exists()) {
                    itemList.push(docSnap.data());
                    itemIdList.push(docSnap.id);
                }
            });
            return { itemList, itemIdList };
        } catch (error) {
            console.error('Failed to fetch documents', error);
            return null;
        }
    }
}


export default FirebaseFetchUtils; 