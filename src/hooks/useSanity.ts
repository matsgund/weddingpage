import { useState, useEffect } from 'react';
import client from '@/sanityClient.config';

interface UseSanityDataResult<T> {
  data: T | undefined;
  loading: boolean;
  error: string | null;
}

const useSanity = <T>(query: string | undefined): UseSanityDataResult<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const errorMessage = 'Noe gikk galt i forespørselen';

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        return;
      }
      
      setLoading(true);
      setError(null);

      try {
        const result = await client.fetch(query);
        if (result.length > 0) {
          const data: T = result;
          setData(data);
        } else {
          console.log('No data found');
          setData(undefined);
        }
      } catch (e) {
        console.error(errorMessage, e);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useSanity;