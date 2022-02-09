import {FaPlus} from 'react-icons/fa'
import { initialParams } from '../App'

const ParamsTable = () => {





    return (
      <>
            <header className='headerTable'>
                <h1 >Params:<FaPlus className='btn-plus' /></h1>
                  
               <>
               <table className='table'>
                <thead>
                <tr>
                <th className='th'>Name </th>
                <th className='th'>Required</th>
                </tr>  
            </thead>
              <tbody> 
                 
                      {
                          initialParams.map((el) => (
                          <tr>
                              <td className='td'>{el.name}</td>
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
  
  export default ParamsTable