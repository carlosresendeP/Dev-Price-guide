//api do mercado livre , busca por items
//https://api.mercadolibre.com/sites/MLB/search?q=iphone

// src/api/mercadoLivre.js

export const searchItems = async (searchName) => {
    try {

        const response = await fetch(
            // `https://api.mercadolibre.com/sites/MLB/search?q=${searchName}`,
            `https://dummyjson.com/products/search?q=${searchName}`
        );
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        return data.products; // Retorna os itens encontrados
    } catch (error) {
        console.error("Erro ao buscar os itens na API:", error);
        throw error; // Repassa o erro caso necessário
    }
};