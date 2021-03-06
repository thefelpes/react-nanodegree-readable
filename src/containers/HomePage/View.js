import React from 'react'
import Wrap from '../../components/Wrap'
import PostList from '../../components/PostList'
import CategoryList from '../../components/CategoryList'
import Loading from '../../components/Loading'
import Controls from '../../components/Controls'
import { Grid, Column } from '../../components/Grid'

const View = props => (
  <Wrap>
    <Grid>
      <Column width={30}>
        <CategoryList {...props} />
      </Column>
      <Column width={70}>
        <Controls {...props} />
        <PostList {...props} />
      </Column>
    </Grid>

    {props.fetch && (
      <Loading />
    )}
  </Wrap>
)

export default View
