import axios from 'axios';

const config = useRuntimeConfig()
const GOOGLE_CLIENT_ID = config.public.googleClientId;

const authApi = axios.create({
    baseURL: config.public.identityApiUrl,
    timeout: 10000
});

export const authService = {
    /**
     * Login user
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<string>} JWT token
     */
    async login(email: string, password: string): Promise<string> {
        const { data } = await authApi.post('/auth/login', { email, password });
        return data.token;
    },

    /**
     * Register new user
     * @param {string} fullName 
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<string>} JWT token
     */
    async register(fullName: string, email: string, password: string): Promise<string> {
        const { data } = await authApi.post('/auth/register', {
            fullName,
            email,
            password,
            role: 'CUSTOMER'
        });
        return data.token;
    },

    /**
     * Login with Google OAuth
     * @param {string} idToken - Google ID token from Google Sign-In
     * @returns {Promise<string>} JWT token
     */
    async loginWithGoogle(idToken: string): Promise<string> {
        const { data } = await authApi.post('/auth/google', { idToken });
        return data.token;
    },

    /**
     * Logout (stateless - just clears client token)
     */
    async logout(): Promise<void> {
        try {
            await authApi.post('/auth/logout');
        } catch (error: unknown) {
            // Ignore errors on logout
            const message = error instanceof Error ? error.message : 'Unknown error';
            console.warn('Logout request failed:', message);
        }
    }
};
