
import { CardProduct } from "../CardProduct";
import {GridProducts, Container } from "./styles";


export function ProductList({products}){



    return(
        <Container>
            <GridProducts>
                {products && products.length > 0 ?(
                    products.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </GridProducts>
        </Container>
    )
} 