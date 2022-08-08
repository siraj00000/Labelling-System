import API from "../../../API";

export const fetchProducts = async (token, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'GET', url,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            resolve(response);
        } catch (error) {
            reject(error?.response.data.error);
        }
    });
};

export const editProduct = async (token, url, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'PUT', url, data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            resolve(response);
        } catch (error) {
            reject(error?.response.data.error);
        }
    });
};

export const updateProductImage = async (token, url, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'PUT', url, data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            resolve(response);
        } catch (error) {
            reject(error?.response.data.error);
        }
    });
};