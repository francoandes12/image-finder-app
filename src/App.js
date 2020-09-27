import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { Card } from './components/Card'
import { SearchForm } from './components/SearchForm'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [term])
  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-red-500 text-2xl font-semibold m-5'>
        Image Finder
      </h2>
      <SearchForm searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>
      )}
      {isLoading ? (
        <div className='flex justify-center items-center'>
          <Loader type='Rings' color='#48bb78' height={80} width={80} />
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
