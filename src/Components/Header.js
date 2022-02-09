import {VscChromeClose} from 'react-icons/vsc'


const Header = () => {
  
  return (
      <>
    <header className='header'>
      <h1>New program node </h1>
      <VscChromeClose style={{color:'red', cursor:'pointer', fontSize: '30px'}}/>
    </header>
    <form>
          <label>Comand: <input type={'tex'}></input></label>
      </form>
    </>
  )
}


export default Header