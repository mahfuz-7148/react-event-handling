import React from 'react'

const ClickEvent = () => {

    // const clicked = () => {
    //     window.alert(`alert`)
    // }
    // const clicked = () => {
    //    document.getElementById('click').textContent = `I'm here`
    // }
    // let count = 0
    // const clicked = name => {
    //     if(count < 5) {
    //         count++
    //         console.log(`${name} clicked ${count} times`)
    //     }
    //     else {
    //         console.log(`${name} stoppp`)
    //     }
    // }
    const clicked = e => e.target.textContent = `heey shanto`

  return (
    <div className='text-5xl p-24 m-24'>
        <h1 id='click' className='font-bold m-10 p-10 flex justify-center'>ClickEvent......</h1>
        <div className='flex justify-center'>
          {/* <button onClick={clicked} className='bg-green-600 p-5 rounded-2xl'>Click me</button> */}
          {/* <button onClick={()=> clicked('shanto')} className='bg-green-600 p-5 rounded-2xl'>Click me</button> */}
          <button onClick={e=> clicked(e)} className='bg-green-600 p-5 rounded-2xl'>Click me</button>
        </div>
    </div>
  )
}

export default ClickEvent