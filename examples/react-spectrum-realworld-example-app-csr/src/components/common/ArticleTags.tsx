import React from 'react';

export default function ArticleTags({ tagList }: { tagList: string[] }) {
  return (
    <ul className='tag-list' style={{ maxWidth: '480px' }}>
      {tagList.map((tag) => (
        <li className='tag-default tag-pill tag-outline' key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
