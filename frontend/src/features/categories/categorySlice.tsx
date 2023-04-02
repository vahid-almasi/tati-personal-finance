import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from "immer";
import { RootState } from "../../app/store"
import { fetchCategories, createCategory, destroyCategory, updateCategory } from './categoryAPI'

export enum Statuses {
    Initial = "Not Fetched",
    Loading = "Loading...",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error"
}

export interface CategoryFormData {
    category: {
        id?: string;
        name: string;
        description: string;
    }
}

export interface CategoryState {
    id?: number;
    name?: string;
    description?: string;
    created_at?: any;
    updated_at?: any;
}

export interface CategoriesState {
    categories: CategoryState[];
    status: string;
}

export interface CategoryUpdateData {
    category_id: number;
    category: CategoryState;
}

export interface CategoryDeleteData {
    category: {
        category_id: number;
    }
}

const initialState: CategoriesState = {
    categories: [
        {
            id: 0,
            name: "",
            description: "",
            created_at: "",
            updated_at: "",
        }
    ],
    status: Statuses.Initial
}

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetchCategories();
        return response;
    }
)

export const createCategoryAsync = createAsyncThunk(
    'categories/createCategory',
    async (payload: CategoryFormData) => {
        const response = await createCategory(payload);

        return response;
    }
)
export const updateCategoryAsync = createAsyncThunk(
    'categories/updateCategory',
    async (payload: CategoryFormData) => {
        const response = await updateCategory(payload);

        return response;
    }
)
export const destroyCategoryAsync = createAsyncThunk(
    'categories/destroyCategory',
    async (payload: CategoryDeleteData) => {
        const response = await destroyCategory(payload);

        return response;
    }
)

export const categorySlice = createSlice({
    name: "categories",
    initialState,
    /**
     * Synchronous actions
     */
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.categories = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })
            .addCase(fetchCategoriesAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            /** Update Section */
            .addCase(createCategoryAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(createCategoryAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.categories.push(action.payload);
                    draftState.status = Statuses.UpToDate;
                })
            })
            .addCase(createCategoryAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            /** Destroy Section */
            .addCase(destroyCategoryAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(destroyCategoryAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.categories = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })
            .addCase(destroyCategoryAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            /** Update Section */
            .addCase(updateCategoryAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(updateCategoryAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    const index = draftState.categories.findIndex(
                        category => category.id === action.payload.id
                    );
                    draftState.categories[index] = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })
            .addCase(updateCategoryAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
    }
})

export const {} = categorySlice.actions;

export const selectCategories = (state: RootState) => state.categories.categories;

export const selectStatus = (state: RootState) => state.categories.status;

export default categorySlice.reducer;