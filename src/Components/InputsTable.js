import {FaPlus} from 'react-icons/fa'
import { initialInputs } from '../App'

const InputsTable = () => {



    return (
      <>
            <header className='headerTable'>
                <h1 >Inputs:<FaPlus className='btn-plus' /></h1>
                  
               <>
               <table className='table'>
                <thead>
                <tr>
                <th className='th'>Name </th>
                <th > Descriptors</th>
                <th className='th'>Required</th>
                </tr>  
            </thead>
              <tbody> 
                 
                      {
                          initialInputs.map((el) => (
                          <tr>
                              <td className='td'>{el.name}</td>
                              <td>{el.descriptors}</td>
                               <td className='td'>
                                  <input type={el.required} />
                               </td>   
                          </tr>
                      ))}
                          
                  
              </tbody>
        </table>
        
              </> 
            </header>
           
       </>
       
       
        
  
     
    )
  
  }
  
  export default InputsTable