import { AuthService } from '../service/AuthService';

export default function AuthHeader() {
    const jwt = AuthService.currentUserValue;
    if(jwt && jwt.token) {
        return {
            Authorization: `Bearer ${jwt.token}`
        }
    } else {
        return {}
    }
}
