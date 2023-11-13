export const useGetParamsFromUrl = (url) => {
  const id = url?.match(/\/(\d+)\/$/)[1];
  
  const splitUrl = url?.split('/');
  const category = splitUrl && splitUrl[splitUrl.length - 3];

  return { id, category };
}