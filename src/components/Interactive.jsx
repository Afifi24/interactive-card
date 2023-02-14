import React, { useState } from 'react'
import desktop from '../images/bg-main-desktop.png'
import violet from '../images/bg-card-front.png'
import gray from '../images/bg-card-back.png'
import Completed from './Completed'
const Interactive = () => {
    const [completed,setCompleted] = useState(false)
    const [Name,setName] = useState(['Jane appleseed'])
    const [Number, setNumber] = useState('0000 0000 0000 0000')
    const [Month,setMonth] = useState('00')
    const [Year,setYear] = useState('00')
    const [serie,setSerie] = useState('000')
//comment
const [curName,setCurName] = useState([])
const [curNumber, setCurNumber] = useState([])
const [curMonth,setCurMonth] = useState([])
const [curYear,setCurYear] = useState([])
const [cuserie,setSCurserie] = useState([])

// errors
const [erroname,setErroname] = useState('')
const [erronumber,setErronumber] = useState('')
const [erromonth,setErromonth] = useState('')
const [erroyear,setErroyear] = useState('')
// colors 
const [namecolor,setNamecolor] = useState('')
const [numbercolor,setNumbercolor] = useState('')
const [monthcolor,setMonthcolor] = useState('')




// confirm function
const Continue = ()=>{
    setCompleted(!completed)
    setCurYear('')
    setCurMonth('')
    setCurName('')
    setCurNumber('')
    setSCurserie('')

    setNamecolor('unset')
    setNumbercolor('unset')
    setMonthcolor('unset')
    
    
}
const Confirm = (e)=>{
    e.preventDefault()
    setNumber(curNumber)
    setMonth(curMonth)
    setYear(curYear)
    // name
    if(/^[a-zA-Z]+$/.test(curName)){
        setErroname('')
        setName(curName)
        setNamecolor('green')
      } else {
        setErroname('Wrong format, letters only')
        setNamecolor('red')
      }
    // number
    if(/^\d+$/.test(curNumber)){
        // setNumber(curNumber)
        setNumbercolor('green')
        setErronumber('')
    } else {
        setNumber(Number)
        setNumbercolor('red')
        setErronumber('Wrong format, numbers only')
    }
    if(curMonth=='' || curYear==''  ){
        setErromonth('can not be blank')
        setMonthcolor('red')
        setMonth(Month)
        setYear(Year)
        setSerie(serie)
    }else{
        setMonthcolor('green')
        setMonth(curMonth)
        setYear(curYear)
        setErromonth('')
        setSerie(cuserie)
    }
    if((/^[a-zA-Z]+$/.test(curName)) && ((/^\d+$/.test(curNumber)))){
       setCompleted(true)
    }
}

  return (
    <div className=' h-screen sm:grid sm:grid-cols-2 lg:grid-cols-3'>
        <div className=" h-1/4 sm:col-span-1 sm:h-screen ">
            <img className='h-full w-full' src={desktop} alt="" />
        </div>
        <div className=" bg-light h-3/4 sm:col-span-1  sm:h-screen lg:col-span-2">
           {
            !completed  &&
            <form className='flex flex-col items-center justify-center h-full gap-6'>
             <div className='flex flex-col'>
                <label className='pb-1 uppercase text-xs font-bold'>cardholder Name</label>
                <input style={{borderColor:namecolor}}  value={curName} onChange={(e)=>setCurName(e.target.value)} className={`w-64 h-8 p-2 border  border-gray-500 rounded-md outline-none`} type="text" placeholder='e.g.Jane Apleseed' />
                <div className='text-red-500 text-xs'>{erroname}</div>
             </div>
             <div className='flex flex-col'>
                <label className='pb-1 uppercase text-xs font-bold'>cardholder number</label>
                <input style={{borderColor:numbercolor}} value={curNumber} onChange={(e)=>setCurNumber(e.target.value)}  className='w-64 h-8 p-2 border border-gray-500 rounded-md outline-none'  type="text" placeholder='e.g.1234 5678 9123 0000  ' />
                <div className='text-red-500 text-xs'>{erronumber}</div>

             </div>
                <div>
                <div className='flex gap-2'>
                <label className='pb-1 uppercase text-xs font-bold'>exp. date (mm/yy)</label>
                <label className='pb-1 uppercase text-xs font-bold'>cvc</label>
                </div>
                <div className='flex gap-2'>
                <input style={{borderColor:monthcolor}} value={curMonth} onChange={(e)=>setCurMonth(e.target.value)} className='h-8 border px-2 outline-none border-gray-500 rounded-md w-12' type="text" placeholder='MM' />
                <input style={{borderColor:monthcolor}} value={curYear} onChange={(e)=>setCurYear(e.target.value)} className='h-8 border px-2 outline-none border-gray-500 rounded-md w-12' type="text" placeholder='YY' />
                <input style={{borderColor:monthcolor}} onChange={(e)=>setSCurserie(e.target.value)} className='h-8 border px-2 outline-none border-gray-500 rounded-md w-36' type="text" placeholder='e.g.123'/>

               </div>
                <div className='text-red-500 text-xs'>{erromonth}</div>
                </div>
                <button className='bg-indigo-900 rounded-md w-64 h-10 text-white' type='submit' onClick={Confirm}>Confirm</button>
            </form>
            }
              {
                completed && <Completed setCompleted={setCompleted} completed={completed} Continue={Continue}/>
              }
            <div>
                <div className='absolute w-64 top-28 z-10 left-7 sm:w-80 sm:top-20 sm:left-32 lg:left-48 sm:left-48  sm:w-64  md:w-80 ' >
                <img className='relative' src={violet} alt="" />
                  <div>
                    <div className='absolute  top-5 left-5 '>
                        <div className='flex gap-2 items-center'>
                        <div className='w-7 h-7 bg-white rounded-full'></div>
                        <div className='w-4 h-4 border border-gray-100 rounded-full'></div>
                        </div>
                        <div className='pt-4 pb-5 w-full text-md text-white font-bold tracking-widest lg:pt-10 md:pb-6 md:text-xl lg:text-2xl'>{Number}</div>
                        <div className='flex gap-20 text-white text-xs  uppercase font-bold w-full md:gap-36'>
                            <h2 className='tracking-widest text-xs md:text-md lg:text-md '>{Name}</h2>
                            <h3>{Month}/{Year}</h3>
                        </div>
                    </div>
                  </div>
                    
                </div>
               <div className='absolute w-64 top-8 right-7 sm:w-64 sm:top-72 sm:left-12 md:w-80 md:left-28 lg:left-64 '> 
                <img className='relative'  src={gray} alt="" />
                 <h3 className='absolute tracking-widest font-bold top-16 right-4 text-white mr-2 text-xs md:mt-4 md:right-6'>{serie}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Interactive