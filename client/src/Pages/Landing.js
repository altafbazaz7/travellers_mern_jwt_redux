import React from 'react'
import { useSelector } from 'react-redux';


const Landing = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <div>
      Welcome {user?.result?.name}
    </div>
  )
}

export default Landing
