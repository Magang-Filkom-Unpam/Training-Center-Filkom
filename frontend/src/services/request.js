const base_url = import.meta.env.VITE_API_URL;

const request = async ({ url, method, body }) => {
    const option = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };

    if (body) {
        option.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${base_url}/api/${url}`, option);
        const data = await response.json();

        return data;
    } catch (error) {
        return error.message;
    }
};

export default request;
