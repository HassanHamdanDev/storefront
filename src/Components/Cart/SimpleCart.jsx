import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Stack, Divider, styled, Chip, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { removeFromCart } from '../../Store/cartreducer';
import './cartsimple.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SimpleCart() {
    const dispatch = useDispatch();
    const { cartItems, show, cartCount, totalPrice } = useSelector(state => state.cart);
    return (
        <>
            {show &&
                <div className='simpleCart'>
                    <Paper >
                        <Divider>
                            <Chip label="Your Cart" />
                            {cartCount}
                        </Divider>
                        <Divider />
                        <Stack spacing={2}>
                            {
                                cartItems.map((elem, index) => {
                                    return (
                                        <div key={index}>
                                            <Item>
                                                {elem.name} {'  '}
                                                Price : {elem.price}
                                                <Button onClick={() => dispatch(removeFromCart(elem))}><CloseIcon fontSize="inherit" /></Button>
                                            </Item >
                                            <Divider />
                                        </div>
                                    )
                                })
                            }
                            <Item>
                                Total : {totalPrice}
                            </Item >
                            <Divider />
                        </Stack>
                    </Paper>
                </div>
            }
        </>
    )
}
