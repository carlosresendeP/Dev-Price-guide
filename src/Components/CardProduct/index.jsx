import PropTypes from 'prop-types';
import { Card, Container } from './styles';


export function CardProduct(products) {



    return (
        <Container>
            <Card className="card">
                <img src={products.product.thumbnail} alt={products.product.title} />
                <h2>{products.product.title}</h2>
                <p>Preço: <span>{products.product.price}</span></p>
                <button>Comprar</button>
            </Card>
        </Container>

    );

}

CardProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

