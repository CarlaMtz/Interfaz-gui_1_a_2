import {FaPlus} from 'react-icons/fa'
import { initialOutputs } from '../App'

const OutputsTable = () => {


    return (
      <>
            <header className='headerTable'>
                <h1 >Outputs:<FaPlus className='btn-plus' /></h1>
                  
               <>
               <table className='table'>
                <thead>
                <tr>
                <th className='th'>Name </th>
                <th className='th'>Descriptors</th>
                </tr>  
            </thead>
              <tbody> 
                 
                      {
                        initialOutputs.map((el) => (
                          <tr>
                              <td className='td'>{el.name}</td>
                               <td className='td'>{el.descriptors} </td>   
                          </tr>
                      ))}
                          
                  
              </tbody>
        </table>
        
              </> 
            </header>
           
       </>
       
       
        
  
     
    )
  
  }
  
  export default OutputsTable