import { create } from 'zustand';
import { fetchReservoirs, addReservoir, updateReservoir, deleteReservoir, toggleReservoirLock } from '../api/reservoirs';
import { Reservoir } from './reservoirs';

interface ReservoirStore {
    reservoirs: Reservoir[];
    selectedReservoir: Reservoir | null; // Добавляем состояние для выбранного резервуара
    fetchReservoirs: () => Promise<void>;
    addReservoir: (reservoir: Omit<Reservoir, 'id'>) => Promise<void>;
    updateReservoir: (id: string, updatedReservoir: Partial<Reservoir>) => Promise<void>;
    deleteReservoir: (id: string) => Promise<void>;
    toggleReservoirLock: (id: string, isLocked: boolean) => Promise<void>;
    selectReservoir: (reservoir: Reservoir | null) => void; // Функция для выбора резервуара
}

export const useReservoirStore = create<ReservoirStore>((set) => ({
    reservoirs: [],
    selectedReservoir: null, // Начальное состояние

    // Получить список резервуаров
    fetchReservoirs: async () => {
        const reservoirs = await fetchReservoirs();
        set({ reservoirs });
    },

    // Добавить новый резервуар
    addReservoir: async (reservoir) => {
        const newReservoir = await addReservoir(reservoir);
        if (newReservoir) {
            set((state) => ({ reservoirs: [...state.reservoirs, newReservoir] }));
        }
    },

    // Обновить резервуар
    updateReservoir: async (id, updatedReservoir) => {
        const updated = await updateReservoir(id, updatedReservoir);
        if (updated) {
            set((state) => ({
                reservoirs: state.reservoirs.map((r) =>
                    r.id === id ? updated : r
                ),
            }));
        }
    },

    // Удалить резервуар
    deleteReservoir: async (id) => {
        const success = await deleteReservoir(id);
        if (success) {
            set((state) => ({
                reservoirs: state.reservoirs.filter((r) => r.id !== id),
            }));
        }
    },

    // Блокировать/разблокировать резервуар
    toggleReservoirLock: async (id, isLocked) => {
        const updated = await toggleReservoirLock(id, isLocked);
        if (updated) {
            set((state) => ({
                reservoirs: state.reservoirs.map((r) =>
                    r.id === id ? updated : r
                ),
            }));
        }
    },

    // Выбрать резервуар
    selectReservoir: (reservoir) => {
        set({ selectedReservoir: reservoir });
    },
}));