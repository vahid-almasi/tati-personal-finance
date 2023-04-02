import { CategoryDeleteData, CategoryFormData, CategoriesState } from "./categorySlice";

const API_URL = "http://localhost:3000/api/beta";

export async function fetchCategories() {
    return fetch(`${API_URL}/categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as CategoriesState;
        });
}

export async function createCategory(payload: CategoryFormData) {
    const category = payload.category;
    return fetch(`${API_URL}/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as CategoriesState;
        });
}
export async function updateCategory(payload: CategoryFormData) {
    const category = payload.category;
    return fetch(`${API_URL}/categories/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as CategoriesState;
        });
}

export async function destroyCategory(payload: CategoryDeleteData) {
    const category = payload.category;
    return fetch(`${API_URL}/categories/${category.category_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category,
        }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {} as CategoriesState;
        });
}