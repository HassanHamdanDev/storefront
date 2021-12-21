import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../Store/productsreducer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/cartreducer';
import { showCart } from '../../Store/cartreducer';
import { Paper, styled } from '@mui/material';
import {
    Container,
    ImageList,
    ImageListItemBar,
    ImageListItem,
    IconButton,
    Button
} from '@mui/material';
import './product.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export function Products(props) {
    const dispatch = useDispatch();

    function add(item) {
        dispatch(addToCart(item));
        dispatch(showCart(true));
    }

    return (
        <Container >
            <ImageList sx={{ maxWidth: 800, }}>
                {props.products.products.map((item, index) => (
                    <div key={index} className='product'>
                        <ImageListItem >
                            <img
                                style={{ maxWidth: 400, height: 350 }}
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.name}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.name}
                                subtitle={item.price}
                                actionIcon={
                                    <>
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.name}`}
                                        >
                                            <Button onClick={() => dispatch(add(item))} size="small">ADD TO CART</Button>
                                        </IconButton>
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.name}`}
                                        >
                                            <Button size="small">Details</Button>
                                        </IconButton>
                                    </>
                                }
                            />
                        </ImageListItem>
                        <Item>
                            <strong> InStock : {item.inventory} </strong>
                        </Item >
                    </div>
                ))}
            </ImageList>
        </Container>
    )
}


const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
