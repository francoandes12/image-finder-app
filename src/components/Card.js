import React from 'react'

export const Card = ({ image }) => {
  const tags = image.tags.split(',')
  return (
    <div className='max-w-sm rounded overflox-hidden shadow-lg'>
      <img src={image.webformatURL} alt='' className='w-full' />
      <div className='px-6 px-4'>
        <div className='font-bold text-xl text-teal-500'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
