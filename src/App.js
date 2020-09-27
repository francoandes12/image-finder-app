import React, { useState } from 'react'
import { CardGrid } from './components/CardGrid'
import { SearchForm } from './components/SearchForm'

function App() {
  const [term, setTerm] = useState('')
  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-red-500 text-2xl font-semibold m-5'>
        Image Finder
      </h2>
      <SearchForm searchText={(text) => setTerm(text)} />
      <CardGrid term={term} />
    </div>
  )
}

export default App
