import { create } from 'zustand';
import axios from 'axios';

axios.defaults.withCredentials = true;
const BASE_URL = "http://localhost:4000/api/users";

const userStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  // Fetch all users
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(BASE_URL);
      set({ users: data, loading: false });
    } catch (error) {
      set({ error: error.response?.data?.message || error.message, loading: false });
      console.error("Error fetching users:", error);
    }
  },

  // Create a new user
  createUser: async (user) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.post(BASE_URL, user);
      set((state) => ({ users: [...state.users, data], loading: false }));
    } catch (error) {
      set({ error: error.response?.data?.message || error.message, loading: false });
      console.error("Error creating user:", error);
    }
  },

  // Update an existing user
  updateUser: async (id, user) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.patch(`${BASE_URL}/${id}`, user);
      set((state) => ({
        users: state.users.map((u) => (u._id === id ? data : u)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.message || error.message, loading: false });
      console.error("Error updating user:", error);
    }
  },

  // Delete a user
  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      set((state) => ({
        users: state.users.filter((u) => u._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.response?.data?.message || error.message, loading: false });
      console.error("Error deleting user:", error);
    }
  },
}));

export default userStore;