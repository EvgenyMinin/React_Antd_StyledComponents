import { API_URL } from 'consts';

export const onDelete = (id: string) => {
  fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
};
