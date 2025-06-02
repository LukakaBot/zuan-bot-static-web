import { useState } from 'react';

function useLoading(initValue: boolean = false) {
  const [loading, setLoading] = useState(initValue);

  return [loading, setLoading] as const;
}

export default useLoading;
