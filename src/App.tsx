import { useState, useEffect } from 'react'
import { PostsContainer, PostWrapper, PostTitle,
  PostContent, UserInfo, PostLikes, PostTags, PostViews } from './assets/StyledPost.tsx';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: [];
  reactions: [];
  views: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<{ [key: number]: User }>({});
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts.slice(0, 10)); // Fisrt 10 posts
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchUser = async (userId: number) => {
      const response = await fetch(`https://dummyjson.com/users/3`);
      const data = await response.json();
      setUsers((prevUsers) => ({ ...prevUsers, [userId]: data }));
    };
    posts.forEach(post => {
      if (!users[post.userId]) {
        fetchUser(post.userId);
      }
    });
  }, [posts, users]);
  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostWrapper key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.body}</PostContent>
          {users[post.userId] &&
            (<UserInfo> Author:
              {users[post.userId].firstName}
              {' '}
              {users[post.userId].lastName} </UserInfo>
            )}
            <PostLikes> tags
            {post.tags}
            </PostLikes>
            <PostLikes>{post.reactions}</PostLikes>
        </PostWrapper>))}
    </PostsContainer> 
    );
}

export default App
