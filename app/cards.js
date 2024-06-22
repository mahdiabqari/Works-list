'use client'
import Link from "next/link";
import { useState } from "react";



function Cards() {

    const [showmodal , setShowmodal] = useState(false)  //عمومی 
    const Close = (e) => {
        e.preventDefault()
        setShowmodal(false)
        //عمومی
    }

    const [infofood , setInfofood] = useState('')  //unick
    const Clickhandel = (e) => {
        e.preventDefault()
        setShowmodal(true)
        setInfofood('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشایپ باوردهستفاده قرار گیرد.')
    }

    return(
        <div className="cards flex justify-center items-center">
            <div className="container-cards w-[80%] flex justify-between items-center flex-wrap gap-[30px]">

                <div className="card_one flex flex-col justify-center items-center w-[18rem] p-4 rounded-[40px] text-white">
                    <div className="imeg overflow-hidden rounded-[40px]">
                        <img className="img-tow w-[16rem] h-[15rem] rounded-[40px]" src="https://imgurl.ir/uploads/q12750_4.png"/>
                    </div>
                    <div className="p felx flex-col justify-center items-center mx-auto">
                        <p dir="rtl" className="text-black flex mt-3">توزیع غذا</p>
                        <span dir="rtl" className="flex mt-2 flex-col"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            <button onClick={Clickhandel} className="ml-auto text-green-500" href='/'> بیشتر... </button>
                        </span>
                    </div>
                </div>
                {showmodal && <div className="modal-card">
                    <div className="card-one-modal flex justify-center items-center h-[30rem] w-[60rem] bg-slate-800 px-10 rounded-2xl text-white">
                        <div className="imeg overflow-hidden rounded-2xl w-[30%]">
                            <img className="img-tow w-[16rem] h-[15rem] rounded-2xl" src="https://imgurl.ir/uploads/q12750_4.png"/>
                        </div>
                        <div className="p w-[70%] felx flex-col justify-center items-center mx-auto ml-10">
                            <p dir="rtl" className="text-blue-400 flex mt-3 text-4xl">توزیع غذا</p>
                            <span dir="rtl" className="flex mt-7 flex-col text-[17px]"> {infofood} </span>
                            <button onClick={Close} className="btn mt-10 ml-[15rem] w-28 h-10 text-[20px]">بستن
                            </button>
                        </div>
                    </div>
                </div>}



                <div className="card_one flex flex-col justify-center items-center w-[18rem] p-4 rounded-[40px] text-white">
                    <div className="imeg overflow-hidden rounded-[40px]">
                        <img className="img-tow w-[16rem] h-[15rem] rounded-[40px]" src="https://imgurl.ir/uploads/q12750_4.png"/>
                    </div>
                    <div className="p felx flex-col justify-center items-center mx-auto">
                        <p dir="rtl" className="text-black flex mt-3">توزیع غذا</p>
                        <span dir="rtl" className="flex mt-2 flex-col"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            <button onClick={Clickhandel} className="ml-auto text-green-500" href='/'> بیشتر... </button>
                        </span>
                    </div>
                </div>
                {showmodal && <div className="modal-card">
                    <div className="card-one-modal flex justify-center items-center h-[30rem] w-[60rem] bg-slate-800 px-10 rounded-2xl text-white">
                        <div className="imeg overflow-hidden rounded-2xl w-[30%]">
                            <img className="img-tow w-[16rem] h-[15rem] rounded-2xl" src="https://imgurl.ir/uploads/q12750_4.png"/>
                        </div>
                        <div className="p w-[70%] felx flex-col justify-center items-center mx-auto ml-10">
                            <p dir="rtl" className="text-blue-400 flex mt-3 text-4xl">توزیع غذا</p>
                            <span dir="rtl" className="flex mt-7 flex-col text-[17px]"> {infofood} </span>
                            <button onClick={Close} className="btn mt-10 ml-[15rem] w-28 h-10 text-[20px]">بستن
                            </button>
                        </div>
                    </div>
                </div>}



                <div className="card_one flex flex-col justify-center items-center w-[18rem] p-4 rounded-[40px] text-white">
                    <div className="imeg overflow-hidden rounded-[40px]">
                        <img className="img-tow w-[16rem] h-[15rem] rounded-[40px]" src="https://imgurl.ir/uploads/q12750_4.png"/>
                    </div>
                    <div className="p felx flex-col justify-center items-center mx-auto">
                        <p dir="rtl" className="text-black flex mt-3">توزیع غذا</p>
                        <span dir="rtl" className="flex mt-2 flex-col"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            <button onClick={Clickhandel} className="ml-auto text-green-500" href='/'> بیشتر... </button>
                        </span>
                    </div>
                </div>
                {showmodal && <div className="modal-card">
                    <div className="card-one-modal flex justify-center items-center h-[30rem] w-[60rem] bg-slate-800 px-10 rounded-2xl text-white">
                        <div className="imeg overflow-hidden rounded-2xl w-[30%]">
                            <img className="img-tow w-[16rem] h-[15rem] rounded-2xl" src="https://imgurl.ir/uploads/q12750_4.png"/>
                        </div>
                        <div className="p w-[70%] felx flex-col justify-center items-center mx-auto ml-10">
                            <p dir="rtl" className="text-blue-400 flex mt-3 text-4xl">توزیع غذا</p>
                            <span dir="rtl" className="flex mt-7 flex-col text-[17px]"> {infofood} </span>
                            <button onClick={Close} className="btn mt-10 ml-[15rem] w-28 h-10 text-[20px]">بستن
                            </button>
                        </div>
                    </div>
                </div>}



                <div className="card_one flex flex-col justify-center items-center w-[18rem] p-4 rounded-[40px] text-white">
                    <div className="imeg overflow-hidden rounded-[40px]">
                        <img className="img-tow w-[16rem] h-[15rem] rounded-[40px]" src="https://imgurl.ir/uploads/q12750_4.png"/>
                    </div>
                    <div className="p felx flex-col justify-center items-center mx-auto">
                        <p dir="rtl" className="text-black flex mt-3">توزیع غذا</p>
                        <span dir="rtl" className="flex mt-2 flex-col"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            <button onClick={Clickhandel} className="ml-auto text-green-500" href='/'> بیشتر... </button>
                        </span>
                    </div>
                </div>
                {showmodal && <div className="modal-card">
                    <div className="card-one-modal flex justify-center items-center h-[30rem] w-[60rem] bg-slate-800 px-10 rounded-2xl text-white">
                        <div className="imeg overflow-hidden rounded-2xl w-[30%]">
                            <img className="img-tow w-[16rem] h-[15rem] rounded-2xl" src="https://imgurl.ir/uploads/q12750_4.png"/>
                        </div>
                        <div className="p w-[70%] felx flex-col justify-center items-center mx-auto ml-10">
                            <p dir="rtl" className="text-blue-400 flex mt-3 text-4xl">توزیع غذا</p>
                            <span dir="rtl" className="flex mt-7 flex-col text-[17px]"> {infofood} </span>
                            <button onClick={Close} className="btn mt-10 ml-[15rem] w-28 h-10 text-[20px]">بستن
                            </button>
                        </div>
                    </div>
                </div>}



                <div className="card_one flex flex-col justify-center items-center w-[18rem] p-4 rounded-[40px] text-white">
                    <div className="imeg overflow-hidden rounded-[40px]">
                        <img className="img-tow w-[16rem] h-[15rem] rounded-[40px]" src="https://imgurl.ir/uploads/q12750_4.png"/>
                    </div>
                    <div className="p felx flex-col justify-center items-center mx-auto">
                        <p dir="rtl" className="text-black flex mt-3">توزیع غذا</p>
                        <span dir="rtl" className="flex mt-2 flex-col"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            <button onClick={Clickhandel} className="ml-auto text-green-500" href='/'> بیشتر... </button>
                        </span>
                    </div>
                </div>
                {showmodal && <div className="modal-card">
                    <div className="card-one-modal flex justify-center items-center h-[30rem] w-[60rem] bg-slate-800 px-10 rounded-2xl text-white">
                        <div className="imeg overflow-hidden rounded-2xl w-[30%]">
                            <img className="img-tow w-[16rem] h-[15rem] rounded-2xl" src="https://imgurl.ir/uploads/q12750_4.png"/>
                        </div>
                        <div className="p w-[70%] felx flex-col justify-center items-center mx-auto ml-10">
                            <p dir="rtl" className="text-blue-400 flex mt-3 text-4xl">توزیع غذا</p>
                            <span dir="rtl" className="flex mt-7 flex-col text-[17px]"> {infofood} </span>
                            <button onClick={Close} className="btn mt-10 ml-[15rem] w-28 h-10 text-[20px]">بستن
                            </button>
                        </div>
                    </div>
                </div>}



                <div className="card_one flex flex-col justify-center items-center w-[18rem] p-4 rounded-[40px] text-white">
                    <div className="imeg overflow-hidden rounded-[40px]">
                        <img className="img-tow w-[16rem] h-[15rem] rounded-[40px]" src="https://imgurl.ir/uploads/q12750_4.png"/>
                    </div>
                    <div className="p felx flex-col justify-center items-center mx-auto">
                        <p dir="rtl" className="text-black flex mt-3">توزیع غذا</p>
                        <span dir="rtl" className="flex mt-2 flex-col"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            <button onClick={Clickhandel} className="ml-auto text-green-500" href='/'> بیشتر... </button>
                        </span>
                    </div>
                </div>
                {showmodal && <div className="modal-card">
                    <div className="card-one-modal flex justify-center items-center h-[30rem] w-[60rem] bg-slate-800 px-10 rounded-2xl text-white">
                        <div className="imeg overflow-hidden rounded-2xl w-[30%]">
                            <img className="img-tow w-[16rem] h-[15rem] rounded-2xl" src="https://imgurl.ir/uploads/q12750_4.png"/>
                        </div>
                        <div className="p w-[70%] felx flex-col justify-center items-center mx-auto ml-10">
                            <p dir="rtl" className="text-blue-400 flex mt-3 text-4xl">توزیع غذا</p>
                            <span dir="rtl" className="flex mt-7 flex-col text-[17px]"> {infofood} </span>
                            <button onClick={Close} className="btn mt-10 ml-[15rem] w-28 h-10 text-[20px]">بستن
                            </button>
                        </div>
                    </div>
                </div>}

            </div>       
        </div>
    )
}

export default Cards;