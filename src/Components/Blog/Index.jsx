import React, { useEffect, useState } from 'react';

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  const query = `query {
    user(username:"AbdulFarhan"){
      publication{
        posts(page:0){
          slug
          title
          brief
          coverImage
          cuid
          _id
        }
      }
    }
  }`;
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          // "Authorization": 'Bearer {API-KEY}' // use API key here
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      setPosts(data.data.user.publication.posts);
    };
    fetchPosts();
  }, [query]);

  console.log(posts);
  return (
    <>
      {posts.length > 0 ? (
        <div>{posts.title}</div>
      ) : (
        <div>There are no blogs available...Please check back later</div>
      )}
    </>
  );
};

export default BlogHome;
