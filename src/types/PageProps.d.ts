export interface pageProps {
  params: { path: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}
