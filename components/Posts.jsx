import { locators } from './Posts.locators'

export const Posts = ({posts}) => {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <p data-testid={locators.title}>{post.title}</p>
          </li>
        )
      })}
    </ul>
  )
}
