import Header from "./Components/Header";
import ParamsTable from "./Components/ParamsTable";
import InputsTable from "./Components/InputsTable";
import OutputsTable from "./Components/OutputsTable";

export const initialParams=[
  {id:1,
   name: '--format', 
   required:'checkbox'
  },
  {
      id:2, 
      name:"--dir-path",
      required:'checkbox'
  }
  ];

  export const initialInputs = [
    {
        id:1,
        name: 'Sequence 1',
        descriptors:'sequence, fasta',
        required:'checkbox'
    },
    {
        id:2,
        name:"Sequence 2",
        descriptors:'sequence, fasta',
        required:'checkbox'
    },       
];
export const initialOutputs=[
  {
   id:1,
   name:'output-file',
   descriptors:'file,fasta, sequence'
  },
  {
      id:2,
      name:'rainbow-file',
      descriptors:'file,fasta, sequence'
  }
  ];


function App() {
  return (
    <div className="container">
     <Header/> 
     <ParamsTable/>  
     <InputsTable/>
     <OutputsTable/>
     <input type='submit' value='Back'  className='btn btn-block' style={{background: 'red'}}/>
     <input type='submit' value='Done' className='btn btn-block' />
    </div>
  );
}

export default App;
