import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

//DTO - Data tranfer object
export type OrderFirestoreDTO = {
    patrimony: string;
    description: string;
    status: 'open' |  'closed';
    solution?: string;
    created_at: FirebaseFirestoreTypes.Timestamp;
    closed_at?: FirebaseFirestoreTypes.Timestamp;
}