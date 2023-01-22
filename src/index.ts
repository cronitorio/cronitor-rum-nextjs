'use client';

import * as Cronitor from '@cronitorio/cronitor-rum-js';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * React hook for automatically tracking navigation changes on Next.js apps.
 *
 * @param clientKey the client key for the Cronitor site.
 * @param config the Cronitor tracker configuration object.
 */
export function useCronitor(clientKey: string, config: Cronitor.CronitorRUMConfig = {}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    Cronitor.load(clientKey, config);
  }, []);

  useEffect(() => {
    Cronitor.track('Pageview');
  }, [pathname, searchParams]);

  return Cronitor;
};
