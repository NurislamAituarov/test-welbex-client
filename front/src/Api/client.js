import { httpClient } from './httpClient';

export async function getTableItems() {
  return httpClient.get(`${process.env.REACT_APP_API_BASE_URL}api/table`);
}
export async function createTableItem(body) {
  return httpClient.post(`${process.env.REACT_APP_API_BASE_URL}api/create`, { ...body });
}
