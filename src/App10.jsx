import React from 'react'
import {Outlet,Link,useLocation,useNavigate} from 'react-router-dom'

export default function App10() {
    let {pathname} = useLocation()		// 得到当前路径
    const navigate = useNavigate()
    
    /*
    useEffect(()=>{
        if(pathname==='/'){
            navigate('/home')
        }
    }, [])
    */
   const gotohome=()=>{
        navigate("/home",{
            state:{num:789}
        })
   }
   const gotodetail=()=>{
    navigate("/detail",{
        state:{id:789}
    })
}
    return (
    <>
    <ul>
        <li><Link to="/home">首页</Link></li>
        <li><Link to="/list/123">列表页</Link></li>
        <li><Link to="/detail?id=456">详情页</Link></li>
    </ul>
    <button onClick={()=>gotohome()}>Home page</button> 
    <br/>
    <button onClick={()=>gotodetail()}>Detail page</button>      
    <Outlet/>
    </>
  )
}
