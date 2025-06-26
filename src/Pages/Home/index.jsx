import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Container, Content, ImputBar, SearchButon, SearchForm } from "./styles";
import { CardProduct, ProductList } from "../../Components";

import { useState } from "react";
import { searchItems } from "../../services/MLapi";

const schema = yup
    .object({
        SearchName: yup.string().required(),
    })
    .required()


export function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    //pegar info do input
    const {
        register,
        handleSubmit,

    } = useForm({
        resolver: yupResolver(schema),
    })

    
    


    const onSubmit = async ({ SearchName }) => {
        setLoading(true);
        try {
            const results = await searchItems(SearchName);
            setProducts(results);

            console.log(results);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }

    };




return (
    <Container>
        <Content>
            <h1>Comparador de Preços</h1>
            <SearchForm onSubmit={handleSubmit(onSubmit)}>
                {/* <SearchBar> */}
                <ImputBar placeholder="Faça sua Busca" {...register("SearchName")}>
                </ImputBar>
                {/* </SearchBar> */}
                <SearchButon type="submit"
                    disabled={loading}
                    style={{
                        cursor: loading ? "not-allowed" : "pointer",
                        backgroundColor: loading ? "#ccc" : "#007bff",
                        color: loading ? "#666" : "#fff",
                    }}
                >
                    Buscar
                </SearchButon>
            </SearchForm>
        </Content>

        <ProductList key={products.id} products={products}>

        </ProductList>


    </Container>
);
}