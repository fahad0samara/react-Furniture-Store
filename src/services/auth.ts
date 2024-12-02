import api from '../utils/api';
import { LoginCredentials, AuthResponse } from '../types/auth';

// Test accounts
const TEST_ACCOUNTS = {
  admin: {
    id: '1',
    email: 'admin@luxeinteriors.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-01',
    lastLogin: new Date().toISOString(),
  },
  user: {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    name: 'John Doe',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-01',
    lastLogin: new Date().toISOString(),
  },
};

// Mock API endpoints for development
const mockApi = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const account = Object.values(TEST_ACCOUNTS).find(
      acc => acc.email === credentials.email && acc.password === credentials.password
    );

    if (!account) {
      throw new Error('Invalid credentials');
    }

    const { password, ...user } = account;
    
    return {
      user,
      token: 'mock-jwt-token',
      refreshToken: 'mock-refresh-token',
    };
  },

  async refreshAccessToken(refreshToken: string): Promise<{ token: string }> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { token: 'new-mock-jwt-token' };
  },

  async getDashboardStats() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      totalUsers: 156,
      activeProducts: 89,
      pendingOrders: 12,
      recentAlerts: 3,
    };
  },

  async getUsers() {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return Object.values(TEST_ACCOUNTS).map(({ password, ...user }) => user);
  },
};

// Export mock API for development
export const {
  login,
  refreshAccessToken,
  getDashboardStats,
  getUsers,
} = mockApi;