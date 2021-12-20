import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../Store/productsreducer';

import {
    Container,
    ImageList,
    ImageListItemBar,
    ImageListItem,
    ListSubheader,
    IconButton,
    Button
} from '@mui/material';

export function Products(props) {
    return (
        <Container >
            <ImageList sx={{ maxWidth: 800, }}>
                {props.products.products.map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            style={{ maxWidth: 400, maxHeight: 350 }}
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
                                        <Button size="small">ADD TO CART</Button>
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
