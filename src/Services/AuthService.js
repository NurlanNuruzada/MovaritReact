import { httpClient } from "../Utils/HttpClient";

export const login = async (data) => {
    try {
        const response = await httpClient.post('/api/Auth/Login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const GetUserStatus = async (userEmail) => {
    try {
        const response = await httpClient.get(`api/Auth/userStatus?EmailAddress=${userEmail}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (data) => {
    try {
        const response = await httpClient.post('api/Auth/Register', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const ResetPassword = async (data) => {
    try {
        const response = await httpClient.post('api/Auth/ResetOldPassword', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const ResetPasswordViaToken = async (data) => {
    try {
        const response = await httpClient.post('/api/Auth/ResetPasswordViaToken', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const SendActivateEmail = async (userEmail) => {
    try {
        const response = await httpClient.post(`api/Auth/SendActivateMail?EmailAddress=${userEmail}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const ConfirmEmailSend = async(data) =>{
    const response = await httpClient.post('api/ConfirmEmail/ConfirmEmai',data)
  }

export const DeleteAccount = async (data) => {
    const response = await httpClient.delete(`api/Auth/DeleteAccount?userId=${data.userId}&password=${data.password}`);
    return response.data;
};
export const SendForgetPasswordLetter = async (email) => {
    const response = await httpClient.post(`/api/Auth/ResetPasswordLetter?EmailAddress=${email}`);
    return response.data;
};
export const loginOTP = async (data) => {
    try {
        const response = await httpClient.post('/api/Auth/LoginOTP', data);
        return response.data;
    } catch (error) {
    }
};
