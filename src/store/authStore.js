import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: (email, password) => {
    // Mock login - replace with actual API call
    set({
      user: { email, name: 'John Doe' },
      isAuthenticated: true,
    });
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  signup: (email, name, password) => {
    // Mock signup - replace with actual API call
    set({
      user: { email, name },
      isAuthenticated: true,
    });
  },
}));
