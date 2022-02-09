import { useState,useEffect } from 'react'


const Form = () => {
  const[itemsWorkflow,setItemsWorkflow]= useState([])

  const dataWorkflow=async ()=>{
    fetch('http://viperdb.scripps.edu/Lab/Workflow/nodes.php?serviceName=get_nodes')
      .then( pros => pros.json() )
        .then( data => { 
        setItemsWorkflow(data)
      } 
    )
  }
  useEffect(()=>{
  dataWorkflow()
  },[])
  
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Title:</label>
        <input
          type='text'
          placeholder='Clustal'
        />
      </div>
      <div className='form-control'>
        <label>Type of node:</label>
    <select>
         {itemsWorkflow.map(item=>(
         <option key={item.idnode}>{item.type_node}</option>))}   
    </select>
    
      </div>
      <div className='form-control'>
        <label>Description:</label>
        <textarea
          type='text'
          placeholder='This is the description for this node'
        />
      </div>

      <input type='submit' value='Next' className='btn btn-block' />
    </form>
  )
}

export default Form