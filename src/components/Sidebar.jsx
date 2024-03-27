
import { MdHomeFilled } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("sidebar").style.top = "10px"; // Adjust as needed
  } else {
    document.getElementById("sidebar").style.top = "100px"; // Adjust as needed
  }
}

const Sidebar = [
    {
        title:"Home",
        icon: <MdHomeFilled className="sidebar-icon"/>,      
        link: "/",
        cName: 'nav-text'
    },
    {
        title:"About Us",
        icon: <FaUserCheck className="sidebar-icon"/>,      
        link: "/about",
        cName: 'nav-text'
    },
    {
        title:"Products",
        icon: <FaBoxOpen className="sidebar-icon"/>,      
        link: "/products",
        cName: 'nav-text'
    },
    {
        title:"Add Product",
        icon: <IoAddOutline className="sidebar-icon"/>,      
        link: "/addproduct",
        cName: 'nav-text'
    },
    {
        title:"Filter",
        icon: <FaFilter className="sidebar-icon"/>,      
        link: "/filter",
        cName: 'nav-text'
    },
];

export default Sidebar;