import axios from 'axios';

const API_URL = 'https://reservoir-api.caravanlabs.ru';

// Тип для резервуара
export interface Reservoir {
    id: string;
    name: string;
    resource: string;
    volume: number;
    currentVolume: number;
    isLocked: boolean;
}

// Получить список резервуаров
export const fetchReservoirs = async (): Promise<Reservoir[]> => {
    try {
        const response = await axios.get(`${API_URL}/reservoirs`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении списка резервуаров:', error);
        return [];
    }
};

// Добавить новый резервуар
export const addReservoir = async (newReservoir: Omit<Reservoir, 'id'>): Promise<Reservoir | null> => {
    try {
        console.log('Отправляем данные на сервер:', newReservoir); // Логируем входные данные
        const response = await axios.post(`${API_URL}/reservoirs`, newReservoir);
        console.log('Ответ сервера:', response.data); // Логируем ответ сервера
        return response.data;
    } catch (error) {
        console.error('Ошибка при добавлении резервуара:', error);
        return null;
    }
};

// Обновить резервуар
export const updateReservoir = async (id: string, updatedReservoir: Partial<Reservoir>): Promise<Reservoir | null> => {
    try {
        const response = await axios.put(`${API_URL}/reservoirs/${id}`, updatedReservoir);
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении резервуара:', error);
        return null;
    }
};

// Удалить резервуар
export const deleteReservoir = async (id: string): Promise<boolean> => {
    try {
        await axios.delete(`${API_URL}/reservoirs/${id}`);
        return true;
    } catch (error) {
        console.error('Ошибка при удалении резервуара:', error);
        return false;
    }
};

// Блокировать/разблокировать резервуар
export const toggleReservoirLock = async (id: string, isLocked: boolean): Promise<Reservoir | null> => {
    try {
        const response = await axios.patch(`${API_URL}/reservoirs/${id}`, { isLocked });
        return response.data;
    } catch (error) {
        console.error('Ошибка при блокировке/разблокировке резервуара:', error);
        return null;
    }
};