import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

// function Nav(){
//   const {pathname} = useLocation();
//   const getSelectedKey = ()=>{
//     return navs.findIndex(item=>item.to === pathname)
//   }
//   const selectedKey = getSelectedKey();
//   console.log(selectedKey)
//   return <Menu 
//     mode="horizontal"
//     theme="dark"
//     selectedKeys={[selectedKey+""]}
//   >
//     {
//       navs.map((item,index)=>{
//         return <Menu.Item key={index}>
//           <Link to={item.to}>{item.title}</Link>
//         </Menu.Item>
//       })
//     }
//   </Menu>
// }
function Nav(props){
  const {theme="light",getSelectedKey=(()=>{}),data} = props;
  const location = useLocation();
  const selectedKey = getSelectedKey(location);
  console.log(selectedKey)
  return <Menu 
    mode="horizontal"
    theme={theme}
    selectedKeys={[selectedKey+""]}
  >
    {
      data.map((item,index)=>{
        return <Menu.Item key={index}>
          <Link to={item.to}>{item.title}</Link>
        </Menu.Item>
      })
    }
  </Menu>
}
export default Nav;