export const useGetParamsFromUrl = (url) => {
  const pathParts = url.split('/').filter(part => part !== '');

  const id = pathParts.pop();
  const category = pathParts.pop();

  return { id, category };
}