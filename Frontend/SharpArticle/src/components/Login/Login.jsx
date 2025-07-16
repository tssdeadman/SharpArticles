import React, { Component } from 'react'

export class Login extends Component {

  

  render() {
    return (
      <div>
        <div className='text-5xl font-sans font-medium text-shadow-red-600
        text-shadow-2xs'>
          <h2>SharP Article</h2>
        </div>
        <div className='flex border-1 border-white h-40 text-2xl mt-8 p-7  '>
          <p className=''>“Read Better, Know More.”
            <br />
              “Articles That Spark Curiosity.”
            <br />

              “Explore Ideas. Expand Minds.”
          </p>
        </div>
        <div className='flex border-0 border-white h-70 justify-center items-center flex-col'>
          <form action="" className='flex flex-col items-start text-2xl border-1 border-white mt-14 h-60 p-4'>
            <label htmlFor="">User Id</label>
            <input type="text"
            placeholder='Enter Your Id'
            />
            <label htmlFor="">Password</label>
            <input type="password" 
            placeholder='Enter Your Password'
            />
            <button className='mt-5 ml-25 bg-gradient-to-r from-red-500 via-blue-600 to-pink-600 rounded-md p-1 cursor-pointer'>
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
