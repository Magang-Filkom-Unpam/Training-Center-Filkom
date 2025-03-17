import request from '@/services/request.js';

class AuthService {
    static url = '/auth';

    static register({ username, email, password }) {
        return request({
            url: `${this.url}/register`,
            method: 'POST',
            body: { username, email, password },
        });
    }

    static login({ username, password }) {
        return request({
            url: `${this.url}/login`,
            method: 'POST',
            body: { username, password },
        });
    }
}

export default AuthService;
