
import api from '../../api/api';
import { Postre} from '../../interface/Postres/PostresInterface'

export const fetchPostres = async (): Promise<Postre[]> => {
    try {
        const response = await api.get<Postre[]>('/postres');
        return response.data;
    } catch (error) {
        console.error("Error fetching postres:", error);
        throw error;
    }
};

export default fetchPostres