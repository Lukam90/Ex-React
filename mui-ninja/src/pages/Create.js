import React from 'react'

import { makeStyles, Typography, Button, Container } from '@material-ui/core'

import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: "violet",
        "&:hover": {
            backgroundColor: "blue"
        }
    },
    title: {
        textDecoration: "underline",
        marginBottom: 20
    }
})

export default function Create() {
    const classes = useStyles()

    return (
        <Container>
            <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <Button
                type="submit"
                className={classes.btn}
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
                onClick={() => console.log("")}
            >
                Submit
            </Button>
        </Container>
    )
}