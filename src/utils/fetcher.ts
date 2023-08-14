import { api } from "../api/index"

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

