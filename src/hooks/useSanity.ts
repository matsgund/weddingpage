import { useState, useEffect } from 'react';

import client from '@/sanityClient.config';

interface UseSanityDataResult<T> {
    data: T | undefined;
}

const useSanity = <T>(query: string | undefined): UseSanityDataResult<T> => {

    const [data, setData] = useState<T>();
    const errorMessage = 'Noe gikk galt i forespørselen';

    useEffect(() => {
        // fetch data from sanity
        const fetchData = async () => {
            if (!query) {
                return;
              
            }
            try {
                const result = await client.fetch(query);
                if(result.length > 0) {
                    const data : T = result;
                    setData(data);
                } else {
                   console.log('No data found');  
                }        
            } catch(e) {
                console.error(errorMessage, e);
            }
        }
        
        fetchData();

    }, [query]); 

    return {data};
}

export default useSanity;