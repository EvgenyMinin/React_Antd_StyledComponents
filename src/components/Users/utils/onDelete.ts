import { API_URL } from 'consts';

export const onDelete = (id: string) => {
  fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
};
