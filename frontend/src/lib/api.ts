/**
 * API client for communicating with Strapi backend
 */

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface ApiOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  token?: string;
}

interface ApiError {
  message: string;
  status: number;
}

/**
 * Base API fetch function
 */
export async function apiFetch<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { method = 'GET', headers = {}, body, token } = options;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (token) {
    requestHeaders['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    const error: ApiError = {
      message: data?.error?.message || data?.message || 'An error occurred',
      status: response.status,
    };
    throw error;
  }

  return data;
}

/**
 * Auth API functions
 */
export const authApi = {
  /**
   * Login with email and password
   */
  login: async (identifier: string, password: string) => {
    return apiFetch<{
      jwt: string;
      user: {
        id: number;
        username: string;
        email: string;
        courseType: 'standard' | 'master';
        isApproved: boolean;
        isActive: boolean;
      };
    }>('/api/auth/local', {
      method: 'POST',
      body: { identifier, password },
    });
  },

  /**
   * Register a new user
   */
  register: async (data: {
    username: string;
    email: string;
    password: string;
    registrationNote?: string;
  }) => {
    return apiFetch<{
      jwt: string;
      user: {
        id: number;
        username: string;
        email: string;
        isApproved: boolean;
      };
    }>('/api/auth/local/register', {
      method: 'POST',
      body: data,
    });
  },

  /**
   * Get current user info
   */
  getMe: async (token: string) => {
    return apiFetch<{
      id: number;
      username: string;
      email: string;
      courseType: 'standard' | 'master';
      isApproved: boolean;
      isActive: boolean;
    }>('/api/users/me', {
      token,
    });
  },

  /**
   * Request password reset
   */
  forgotPassword: async (email: string) => {
    return apiFetch('/api/auth/forgot-password', {
      method: 'POST',
      body: { email },
    });
  },

  /**
   * Reset password with token
   */
  resetPassword: async (code: string, password: string, passwordConfirmation: string) => {
    return apiFetch('/api/auth/reset-password', {
      method: 'POST',
      body: { code, password, passwordConfirmation },
    });
  },
};

/**
 * Admin API functions for user management
 */
export const adminApi = {
  /**
   * Get all users
   */
  getUsers: async (token: string, filters?: { status?: string; courseType?: string; search?: string }) => {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.courseType) params.append('courseType', filters.courseType);
    if (filters?.search) params.append('search', filters.search);

    const query = params.toString() ? `?${params.toString()}` : '';

    return apiFetch<Array<{
      id: number;
      username: string;
      email: string;
      courseType: 'standard' | 'master';
      isApproved: boolean;
      isActive: boolean;
      createdAt: string;
      approvedAt?: string;
      deactivatedAt?: string;
    }>>(`/api/user-management${query}`, { token });
  },

  /**
   * Get pending users
   */
  getPendingUsers: async (token: string) => {
    return apiFetch<Array<{
      id: number;
      username: string;
      email: string;
      createdAt: string;
      registrationNote?: string;
    }>>('/api/user-management/pending', { token });
  },

  /**
   * Approve a user
   */
  approveUser: async (token: string, userId: number, courseType: 'standard' | 'master' = 'standard') => {
    return apiFetch(`/api/user-management/${userId}/approve`, {
      method: 'PUT',
      token,
      body: { courseType },
    });
  },

  /**
   * Reject a user
   */
  rejectUser: async (token: string, userId: number) => {
    return apiFetch(`/api/user-management/${userId}/reject`, {
      method: 'PUT',
      token,
    });
  },

  /**
   * Deactivate a user
   */
  deactivateUser: async (token: string, userId: number) => {
    return apiFetch(`/api/user-management/${userId}/deactivate`, {
      method: 'PUT',
      token,
    });
  },

  /**
   * Reactivate a user
   */
  reactivateUser: async (token: string, userId: number) => {
    return apiFetch(`/api/user-management/${userId}/reactivate`, {
      method: 'PUT',
      token,
    });
  },

  /**
   * Update user course type
   */
  updateCourseType: async (token: string, userId: number, courseType: 'standard' | 'master') => {
    return apiFetch(`/api/user-management/${userId}/course-type`, {
      method: 'PUT',
      token,
      body: { courseType },
    });
  },
};
