import React from "react";
import { BoxImage, Button, CardBox, ProductImage, ProductInfoBox } from "./ProductCardStyle";
//

export default function ProductCard({ product, addItensOnCart }) {
    return (
        <CardBox color={product.color}>
            <BoxImage>
                <ProductImage src={product.imageUrl} />
            </BoxImage>
            <ProductInfoBox>
                <p>{product.name}</p>
                <p>Preço: R${product.price}</p>
                <Button onClick={() => addItensOnCart(product)}>Adicionar</Button>
            </ProductInfoBox>
        </CardBox>
    )
}