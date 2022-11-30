import * as Cronitor from '@cronitorio/cronitor-rum-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * React hook for automatically tracking navigation changes on Next.js apps.
 *
 * @param clientKey the client key for the Cronitor site.
 * @param config the Cronitor tracker configuration object.
 */
export const useCronitor = (clientKey: string, config: Cronitor.CronitorRUMConfig = {}) => {
  const router = useRouter();

  useEffect(() => {
    Cronitor.load(clientKey, config);

    // Trigger initial page view
    Cronitor.track('Pageview');

    // Add on route change handler for client-side navigation
    const handleRouteChange = () => Cronitor.track('Pageview');
    
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [clientKey]);

  return Cronitor;
};
