import './App.css';
import {useSelector ,  useDispatch } from "react-redux";
import { useEffect} from "react";
import { getList } from './store/list/listSlice';
import List from './components/List';

function App() {
  const dispatch = useDispatch();
  const listdata = useSelector((state) => state.list)
  useEffect(() => {
    dispatch(getList())
    },[])
  return (
    <div className="App">
      <form>
         <h1>{listdata.message}</h1>
         <div>
            {
              listdata.data.map((ele)=> <List key={ele.id} id={ele.id} content={ele.content} />)

            }
         </div>
         <div>
           <input 
           type="text"
           value='입력된 글자'
           />
           <button type='submit'>목록추가</button>
         </div>
      </form>
    </div>
  );
}

export default App;
