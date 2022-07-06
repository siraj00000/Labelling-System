import API from "../../API";

// Fetch
export const fetchCompany = async (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'GET',
                url: `/api/fetch-company-admin`,
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

// Insert Company admin
export const CompanyAdminInsert = async (token, detail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'POST',
                url: `/api/insert-company-admin`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: detail
            });
            resolve(response);
        } catch (error) {
            reject(error?.response.data.error);
        }
    });
};

export const CompanyAdminRegistration = async (token, detail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'POST',
                url: `/api/auth/register`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: detail
            });
            resolve(response);
        } catch (error) {
            reject(error?.response.data.error);
        }
    });
};

// Update Company Admin 
export const updateCompanyAdmin = async (url, token, reqBody) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'PUT',
                url: url,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: reqBody
            });
            if (response) resolve(response);
            else reject(response);
        } catch (error) {
            reject(error);
        }
    });
};


// Update manufacturer 
export const updateManufacturer = async (url, token, reqBody) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: 'PUT',
                url: url,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: reqBody
            });
            if (response) resolve(response);
            else reject(response);
        } catch (error) {
            reject(error);
        }
    });
};

// Delete manufacturer 
export const deleteManufacturer = async (url, token, email) => {
    API({
        method: 'DELETE',
        url: url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: { email }
    });
};