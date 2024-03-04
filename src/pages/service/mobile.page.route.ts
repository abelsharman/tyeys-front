import { SsrRoutingLib } from '@shared/lib';
import { resolveRoute } from 'vite-plugin-ssr/routing';

export default SsrRoutingLib.defineMobileRoute((pageContext: any) => {
  return resolveRoute('/service/@slug', pageContext.urlPathname);
});
