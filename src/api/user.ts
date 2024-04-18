import { addSessionToStorage } from '../helpers/tokens';
import { addUserToStorage } from '../helpers/user';
import { request } from './request';
import router from '../router'; // Импортируем роутер

export const login = async (username: string, password: string) => {
  const response = await request({
    url: '/login',
    method: 'POST',
    data: {
      user: {
        username,
        password,
      },
    },
  });

  addSessionToStorage(response.token);
  addUserToStorage(JSON.stringify(response.user));
  router.push({ name: 'chat' }); // Перенаправляем на страницу чата
  return response;
};

export const register = async (
    username: string,
    password: string,
    confirmation_password: string
) => {
  await request({
    url: '/register',
    method: 'POST',
    data: {
      user: {
        username,
        password,
        confirmation_password,
      },
    },
  });

  const response = await login(username, password);
  return response;
};