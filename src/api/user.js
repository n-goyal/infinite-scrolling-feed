import axiosClient from './apiClient';

export function fetchUsers (query) {
    let result;
    const endPoint = query ? `/user?${query}` : '/user'
    try {
        result = axiosClient.get(endPoint);
    } catch (error) {
        console.log(error);
    }
    
    return result;
}
