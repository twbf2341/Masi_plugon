import { ImasiideProxyImpl } from './libs/types/masiideProxyImpl';

declare module 'masiide' {
  export let masiideProxyImpl: ImasiideProxyImpl;
}
