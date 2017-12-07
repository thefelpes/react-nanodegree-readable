import React from 'react'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import Box from '../common/Box'
import { List, Item, Score, IconWrapper, CustomLink } from './Styles'

const PostList = props => (
  <Box>
    <List>
      {props.posts.map(post => (
        <Item
          key={post.id}
          innerDivStyle={{
            display: 'flex',
            padding: 0
          }}
        >
          <CustomLink to={`/${post.category}/${post.id}`}>{post.title}</CustomLink>
          <Score>{post.voteScore}</Score>
          <IconWrapper onClick={() => props.voteUp(post)}>
            <ThumbUp
              style={{
                width: '16px',
                color: '#08b135'
              }}
            />
          </IconWrapper>
          <IconWrapper onClick={() => props.voteDown(post)}>
            <ThumbDown
              style={{
                width: '16px',
                color: '#e02100'
              }}
            />
          </IconWrapper>
        </Item>
      ))}
    </List>
  </Box>
)

export default PostList
