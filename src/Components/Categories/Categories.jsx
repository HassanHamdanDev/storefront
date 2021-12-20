import React from 'react';
import { connect } from 'react-redux';
import { Container, Stack, Divider, Fab, Typography } from '@mui/material';
import { active } from '../../Store/catagoriesreducer';


export function Categories(props) {
    return (
        <>
            <Container mt={2}>
                <Stack
                    m={4}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    {props.activeList.categories.map((elem, index) => {
                        return (
                            <Fab
                                key={index}
                                variant="extended"
                                onClick={() => props.active(elem.name)}
                            >
                                {elem.display_name}
                            </Fab>
                        )
                    })
                    }
                </Stack>
                <Typography variant="h3" component="h3">
                    {props.activeList.activeCategories.display_name}
                </Typography>
                <Typography variant="h5" component="h5">
                    {props.activeList.activeCategories.description}
                </Typography>
            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({
    activeList: state.categories,
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);