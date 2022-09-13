import React from 'react'
import { useState, useEffect, useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import {FaSignOutAlt} from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    const {success, loading, user,} = useContext()
  return (
    <div>
    <h4> 
    <FaSignOutAlt/> 
    </h4>
    </div>
  )
}

export default Header