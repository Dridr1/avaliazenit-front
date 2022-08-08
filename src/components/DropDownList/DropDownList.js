import React from 'react'
import { Input } from './Styles'
import { DataList } from './Styles'

const DropDownList = ({ placeHolderContent, handleChange, inputName }) => {
  return (
    <>
      <Input name={inputName} list='notas' placeholder={placeHolderContent} onChange={handleChange} />
      <DataList id='notas' >
        <option value="0"></option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </DataList>
    </>
  )
}

export default DropDownList