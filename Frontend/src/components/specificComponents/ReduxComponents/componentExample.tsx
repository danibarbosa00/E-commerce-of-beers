//EJEMPLO DE REDUX

import { changeExample, changeExampleSumNumber } from '../../../utils/reducers/reduxDispatch';
import { ExamplePayload } from '../../../utils/reducers/example';
import { AllReduxPayloads } from '../../../utils/reducers';
import { ConnectedProps,connect } from 'react-redux';


////////////////////PASAR EL COMPONENTE ////////////////////
//<Button/>
//<ResultConnect/>
////////////////////////////////////////

interface ButtonProps {}

const Button:React.FC<ButtonProps> = ({})=>{
  return(
   <div>
     <button onClick={()=> changeExample({name:'PEPEEEEE',number:1})}>press button for change name</button>
     <button onClick={()=>changeExampleSumNumber()}>SUM NUMBER</button>
   </div>

  )
}

interface ResultProps extends ReduxExample {}

const Result: React.FC<ResultProps> = ({example}) => {
  return (
  <div>example name is {example?.name} example is number {example?.number}</div>
  )
}

const exampleDispatch = {
  setExample: (payload:ExamplePayload)=>({type:'CHANGE_EXAMPLE', payload}),
}

const mapExampleConnector = (state:AllReduxPayloads)=>({example:state.example})
const exampleConnect=connect(mapExampleConnector,exampleDispatch)
export type ReduxExample = ConnectedProps<typeof exampleConnect>

const ResultConnect = exampleConnect(Result)

/////////////////////////
export {Button,ResultConnect}



