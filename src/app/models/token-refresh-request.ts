export class TokenRefreshRequest {
    token: string;
    refreshToken: string;

    constructor() {
        this.token = '';
        this.refreshToken = '';
    }
}