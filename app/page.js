'use client'

import Image from "next/image";
import Link from "next/link";
import Title from "./Title";
import { useState } from "react";
import Cards from "./cards";


export default function Home() {

  const [img , setImg] = useState([
    {src: "https://imgurl.ir/uploads/z79821_1.png" , id:1}
  ])



  const Clickhandler = (e) => {
    e.preventDefault()

    img.map((item) => {
      if(item.id == 1){
        setImg([
          {src: "https://imgurl.ir/uploads/p64500_2.png" , id:2},
        ])
      }
      else if (item.id == 2){
        setImg([
          {src: "https://imgurl.ir/uploads/a485363_3.png" , id:3}
        ])
      }
      else if (item.id == 3){
        setImg([
          {src: "https://imgurl.ir/uploads/q12750_4.png" , id:4}
        ])
      }
      else if (item.id == 4){
        setImg([
          {src: "https://imgurl.ir/uploads/z79821_1.png" , id:1}
        ])
      }
    })

    console.log(img)
  }

  const Bclickhandler = (e) => {
    e.preventDefault()

    img.map((item) => {
      if(item.id == 4){
        setImg([
          {src: "https://imgurl.ir/uploads/a485363_3.png" , id:3},
        ])
      }
      else if (item.id == 3){
        setImg([
          {src: "https://imgurl.ir/uploads/p64500_2.png" , id:2}
        ])
      }
      else if (item.id == 2){
        setImg([
          {src: "https://imgurl.ir/uploads/z79821_1.png" , id:1}
        ])
      }
      else if (item.id == 1){
        setImg([
          {src: "https://imgurl.ir/uploads/q12750_4.png" , id:4}
        ])
      }
    })

    console.log(img)
  }





  return (
    <main className="flex flex-col justify-center items-center">

      <div className="con-header flex justify-center items-center h-[4.5rem] w-[100%]">
        <div className="header flex justify-between items-center h-[4.5rem] w-[85%]">
            <div className="left">
              <img className="w-30 h-12 rounded-xl ml-8 mb-1" src="https://imgurl.ir/uploads/h038883_Screenshot_40.png"/>
            </div>

            <div className="center">
              <ul className="flex justify-center items-center gap-5">
                <Link href="#home"><li className="list-first">خانه</li></Link>
                <Link href="#about"><li className="list-first">درباره ی ما</li></Link>
                <Link href="#doing"><li className="list-first">فعالیت ها</li></Link>
                <Link href="#panels"><li className="list-first">همکاری</li></Link>
              </ul>
            </div>

            <div className="right ">
              <Link href="/help"> 
                <button className="btn mr-10">کمک به خیریه</button>
              </Link>
            </div>
        </div>
      </div>

      <div id="home" className="banner flex flex-col items-center w-full h-screen relative bottom-[4.5rem]">
        <div className="top flex flex-col justify-between items-center h-[42rem] w-[100%] rounded-bl-[20rem] rounded-br-[20rem]">
          <div dir="rtl" className="bottom">
            <h1 className="title">مرکز نیکوکاری سیدالشهداء</h1>
            <h2 className="paragraf w-[80%] mt-4">ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
          </div>
        </div>
      </div>

      <div id="about" className="picturs mt-[15rem] flex justify-center items-center w-full h-[20rem] mb-[5rem]">
        <div className="container-cards flex w-[80%] justify-center items-center gap-10">
            <div className="left flex justify-center items-center w-[50%]">
              <div className="container-img flex">
                <button onClick={Bclickhandler} id="ali" className="h-[30rem] bg-blue-100">
                    <img className="w-[2rem] h-[2rem] rounded-full" src="https://imgurl.ir/uploads/z00922_Screenshot_39.png"/>
                </button>
                <div className="overflow">
                  {img.map((item) => {
                    return <img key={item.id} src={item.src} className="image w-[20rem] h-[30rem]"/>
                  })}
                </div>
                <button onClick={Clickhandler} id="mahdi" className="h-[30rem] bg-blue-100">
                  <img className="w-[2rem] h-[2rem] rounded-full" src="https://imgurl.ir/uploads/n680408_Screenshot_39.png"/>
                </button>
              </div>
            </div>

            <div dir="rtl" className="rightt w-[50%] flex justify-center flex-col items-start text-white">
              <Title>
                <h1 className="title">درباره ی مــا</h1>
                <p className="paragraf">ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              </Title>
            </div>
        </div>
      </div>

      <div id="doing" className="cards mt-[15rem] flex flex-col justify-center items-center">
        <div className="top_tow felx justify-center items-center flex-col">
          <h1 className="title text-center">
              فعالیت های خیریه
          </h1>
          <p className="paragraf">شما می تواند برنامه های فعالیتی را در بخش زیر مشاهده کنید</p>
        </div>
        
        <Cards />

      </div>

      <div id="panels" className="information flex flex-col justify-center items-center w-[100%] mt-[15rem]">
        <div className="container-cards w-[80%] gap-20 flex justify-center items-center">
          <div className="info flex justify-center items-center w-[100%] gap-10">

            <div className="left flex flex-col justify-center items-center gap-7 w-[30%]">
              
              <div className="eitaa w-[60%] px-4 py-4 flex flex-col justify-center items-center bg-blue-950 text-white rounded-xl">
                <img className="w-[100px] h-[100px]" src="https://imgurl.ir/uploads/q110252_Eitaa-vector-logo.png"/>
                <h2 className="mt-4 text-xl">ایتا</h2>
                <h3 className="text-xl mt-2">09123456789</h3>
              </div>

              <div className="number w-[60%] px-4 py-4 flex flex-col justify-center items-center bg-blue-950 text-white rounded-xl">
                <img className="w-[100px] h-[100px] rounded-xl" src="https://imgurl.ir/uploads/l533259_119-1198511_-.png"/>
                <h2 className="mt-4 text-xl">تلفن تماس</h2>
                <h3 className="text-xl mt-2">09123456789</h3>
              </div>

              <div className="instagram w-[60%] px-4 py-4 flex flex-col justify-center items-center bg-blue-950 text-white rounded-xl">
                <img className="w-[100px] h-[100px]" src="https://imgurl.ir/uploads/k512118_3-500x500.png"/>
                <h2 className="mt-4 text-xl">اینستاگرام</h2>
                <h3 className="text-xl mt-2">@maktap14</h3>
              </div>

            </div>

            <div className="right flex flex-col justify-center items-center w-[70%]">
              <div className="titr rounded-2xl w-full text-white mb-10 py-8">
                <h1 className="title text-center">همــکــاری</h1>
              </div>
              <div className="message py-10 px-10 w-[100%] border-b-4 border-b-black rounded-t-3xl">
                <h1 dir="rtl" className="text-3xl text-white">
                  ایپسوم متن ساختگی با تولید سادگی است
                </h1>
              </div>
              <div className="explain text-xl px-10 py-10 text-white w-[100%]">
                <p id="emergency" dir="rtl">
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer text-black flex justify-center items-center w-[100%] h-[17rem] rounded-t-full mt-[10rem]">
                <div className="con w-[85%] flex gap-7 justify-center items-center mx-auto">

                    <div dir="rtl" className="flex flex-col justify-center w-[33%] items-start">
                        <h1 className="text-2xl mb-3">حسینیه سیدالشهداء</h1>
                        <h5>- خانه</h5>
                        <h5>- فعالیت ها</h5>
                        <h5>- همکاری</h5>
                        <h5>- درباره ما</h5>
                    </div>

                    <div dir="rtl" className="flex flex-col justify-center items-center w-[33%] ">
                        <img className="w-[150px] h-14 rounded-xl mb-1" src="https://imgurl.ir/uploads/h038883_Screenshot_40.png"/>
                        <div className="images flex justify-center items-center gap-4 mt-7">
                          <img className="w-[40px] h-[40px] rounded-xl" src="https://imgurl.ir/uploads/l533259_119-1198511_-.png"/>
                          <img className="w-[40px] h-[40px]" src="https://imgurl.ir/uploads/k512118_3-500x500.png"/>
                          <img className="w-[40px] h-[40px]" src="https://imgurl.ir/uploads/q110252_Eitaa-vector-logo.png"/>
                        </div>
                    </div>

                    <div className="creator w-[33%] flex flex-col justify-center items-center ">
                      <h1>Created by mahdiabqari</h1>
                      <img className="w-[100px] h-[100px] rounded-full" src="https://imgurl.ir/uploads/n0537_My_logo_thumb.png"/>
                    </div>

                </div>
      </div>


    </main>
  );
}
