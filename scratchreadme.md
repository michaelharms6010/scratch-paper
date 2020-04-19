# db-practice-tl-hours

- [ ] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following rules:
  - [ ] a `user` can have multiple `posts`.
  - [ ] a `post` belongs to only one `user`.
  - [ ] a `post` can have multiple `likes` from multiple `users`.
  - [ ] when adding `users` the client must provide a `username`.
  - [ ] when adding a `post` the client must provide a `title` and a `post_content`.
  - [ ] when adding a `post` the client must provide the `id` of an existing user as a `user_id`.
  - [ ] when adding `likes` the client must provide a `user_id` and a `post_id`
- [ ] Build an API with endpoints for:
  - [ ] adding users.
  - [ ] retrieving a list of users.
  - [ ] adding posts.
  - [ ] retrieving a list of posts. **The list of posts should include the user name**.
  - [ ] adding likes.
  - [ ] retrieving a list of likes for a specific post.

## Example schemas (Minimal, feel free to add)

#### Users

```
{
    id: 1
    username: "username-goes-here"
}
```

#### Posts

```
{
    id: 1
    user_id: 1
    title: "This is a title"
    post_content: "I'm not so sure about that, furthermore,"
}
```

#### Likes
```
{
    id: 1
    user_id: 1
    post_id: 1
}
```