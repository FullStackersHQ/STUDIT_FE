import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export function useIntersectionObserver({ threshold = 0, hasNextPage, fetchNextPage }: useIntersectionObserverProps) {
  const [target, setTarget] = useState<
    HTMLDivElement | null | undefined | HTMLLIElement | HTMLAnchorElement | HTMLButtonElement
  >(null);

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
}
