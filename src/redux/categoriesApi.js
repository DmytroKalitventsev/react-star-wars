import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  tagTypes: ['CategoryItems', 'ItemDescriptions'],
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => '/',
    }),

    getCategoryItems: build.query({
      query: ({ categoryName, currentPage }) => `/${categoryName}/?page=${currentPage}`,
      providesTags: (result, error, currentPage) => [{ type: 'CategoryItems', id: currentPage }],
    }),

    getItemDescriptions: build.query({
      query: ({ categoryName, itemId }) => `/${categoryName}/${itemId}`,
      providesTags: (result, error, itemId) => [{ type: 'ItemDescriptions', id: itemId }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryItemsQuery,
  useGetItemDescriptionsQuery,
} = categoriesApi;