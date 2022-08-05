import React from 'react';

function Blog({ blogs }) {
    const { title, image, tags, text, createdAt, views } = blogs;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default Blog;
