import { useEffect } from 'react';

export const useFetchData = (request, onSucces, onError) => {
    useEffect(() => {
        (async () => {
            try {
                const response = await request();

                if (!response.ok) {
                    throw new Error(response.message);
                }

                onSucces(response);
            } catch (error) {
                onError(error);
            }
        })();
    }, [request, onSucces, onError]);
};
