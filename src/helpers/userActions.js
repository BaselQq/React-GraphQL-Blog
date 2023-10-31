import axios from "axios";

export default {
    login: async (email, password) => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password
            });

            if (res.data && res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                return res.data;
            } else {
                console.log(res.data.errors);
            }
        } catch(err) {
            console.log('Login Credentials missing', err);
        }
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}