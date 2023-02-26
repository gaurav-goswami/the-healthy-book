import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiData = createApi({
    reducerPath : 'apiData',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://www.themealdb.com'
    }),

    endpoints : (builder) => ({
        getAllCategories : builder.query({
            query : () => ({
                url : 'api/json/v1/1/categories.php',
                method : 'GET'
            })
        }),

        getAllCategoriesByCountry : (builder).query({
            query : () => ({
                url : 'api/json/v1/1/list.php?a=list',
                method : 'GET'
            })
        }),

        getSeletedCategory : (builder).query({
            query : (name) => ({
                url : `api/json/v1/1/filter.php?c=${name}`,
                method : 'GET'
            })
        }),

        getSeletedCategoryByCountry : (builder).query({
            query : (name) => ({
                url : `api/json/v1/1/filter.php?a=${name}`,
                method : 'GET'
            })
        }),

        getRandomMeal : (builder).query({
            query : () => ({
                url : 'api/json/v1/1/random.php',
                method : 'GET'
            })
        }),

        getMeal : (builder).query({
            query : (name) => ({
                url : `api/json/v1/1/search.php?s=${name}`,
                method : 'GET'
            })
        })
    })
})


export const { useGetAllCategoriesQuery, useGetAllCategoriesByCountryQuery, useGetSeletedCategoryQuery, useGetSeletedCategoryByCountryQuery, useGetRandomMealQuery, useGetMealQuery} = apiData;