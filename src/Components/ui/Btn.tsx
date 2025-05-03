import React from 'react'
import { GenresType } from '../../types/types'

type BTNPropsType = {
    genre : GenresType
}
function Btn({genre} : BTNPropsType) {
  return (
    <button>{genre.name}</button>
  )
}

export default Btn