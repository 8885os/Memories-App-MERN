import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'


const Posts = ({ setCurrentId }) => {

    const posts = useSelector(state => state)
    const classes = useStyles()


    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map(post => (
                    <Grid item xs={12} sm={6}>
                        {console.log(post._id)}
                        <Post post={post} setCurrentId={setCurrentId} key={post._id} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts