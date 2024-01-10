import React from 'react'
import img1 from './Img/img1.jpg'
import img2 from './Img/img2.jpg'
import img3 from './Img/img3.png'
import project3 from './Img/project3.png'
import foodies from './Img/foodies.png'

const Home = () => {
  return (
    <div className='space-y-10'>
      {/*---------------------- HOME SECTION------------------- */}
      <section className="bg-[#96C6D9] md:flex p-5 justify-evenly md:p-24 ">

        <img className="order-2 aspect-square object-cover object-right rounded-full w-96 border-8  p-7 " src={img1} alt='pic' />
        <section className='p-5 space-y-2 my-auto  '>
          <p className='font-bold text-lg '>
            Hello, I'm
          </p>

          <h1 className='font-bold font-serif text-4xl '> Jyoti Pal</h1>
          <h3 className='font-bold text-2xl'> Web Developer</h3>

          <button className='p-2 bg-[#025373] text-[#96C6D9] hover:bg-[#96C6D9] hover:text-[#025373] border-2 border-[#025373] rounded-3xl font-semibold  text-xl '>
            Download CV
          </button>

        </section>

      </section>

      {/* ------------------ABOUT SECTION-------------- */}
      <section className="bg-[#50A0BF]  p-5 space-y-5  flex-wrap">
        <h1 className='text-center text-4xl text-[#023859] font-bold hover:cursor-pointer hover:text-[#96C6D9]'>About Me</h1>
        <div className='space-y-16 md:space-y-0 md:flex md:space-x-5'>
          <img src={img2} className='border-double border-4 aspect-square object-cover md:w-96 rounded-lg drop-shadow-2xl shadow-[#96C6D9] ' alt='minion' />
          <p className='text-justify  font-serif md:w-2/3'>
            As a fresh graduate with a strong passion for web development, I
            am eager to contribute my skills and knowledge to create
            impactful digital experiences. Proficient in HTML, CSS,
            JavaScript,React,Wordpress, and eager to learn new technologies, I have
            completed several projects during my studies that demonstrate
            my ability to develop visually appealing and functional websites.
            With a keen eye for detail and a strong work ethic, I am confident
            in my ability to contribute as a
            professional web developer.

          </p>
        </div>
      </section>

      {/* ------------SKILLS SECTION----------- */}

      <section className='bg-[#50A0BF] p-5 space-y-5  flex-wrap'>
        <p className='text-center text-4xl text-[#023859] font-bold hover:cursor-pointer hover:text-[#96C6D9]'> My Skills</p>
        <div className='text-8xl text-center p-5 space-y-5'>


          <i className='hover:scale-125 duration-700 bx bxl-react' ></i>
          <i className='hover:scale-125 duration-700 bx bxl-tailwind-css' ></i>
          <i className='hover:scale-125 duration-700 bx bxl-wordpress' ></i>
          <i className='hover:scale-125 duration-700 bx bxl-bootstrap' ></i>
          <i className='hover:scale-125 duration-700 bx bxl-javascript' ></i>
          <i className='hover:scale-125 duration-700 bx bxl-html5'></i>
          <i className='hover:scale-125 duration-700 bx bxl-css3' ></i>
          <i className='hover:scale-125 duration-700 bx bxl-python' ></i>
        </div>
      </section>


      {/* ---------------PROJECT SECTION-------------- */}
      <section className='bg-[#50A0BF] p-5 space-y-5 '>
        <p className='text-center text-4xl text-[#023859] font-bold hover:cursor-pointer hover:text-[#96C6D9]'> Projects</p>
        <div className='space-y-5 md:flex md:space-y-0 md:justify-evenly'>
          <a className='text-center font-semibold text-lg ' href='/'><img src={foodies} className='md:w-72 mx-auto rounded-lg  hover:drop-shadow-2xl hover:shadow-[#96C6D9]' alt='minion' /><p>Foodies</p> </a>
          <a className='text-center font-semibold text-lg mt-4' href='/'> <img src={project3} className='md:w-72 rounded-lg hover:drop-shadow-2xl hover:shadow-[#96C6D9]' alt='minion' /><p>My Portfolio</p> </a>
          <a className='text-center font-semibold text-lg mt-4' href='https://dba800f6-4549-4c23-b857-a9e503b934b2-00-2tmjkrcutpztn.asia-b.replit.dev/'><img src={img3} className='md:w-72 rounded-lg hover:drop-shadow-2xl hover:shadow-[#96C6D9]' alt='minion' /> <p>Ethuziastic Web </p></a>

        </div>
      </section>



      {/* ---------------CONTACT SECTION-------------- */}

      <section className='bg-[#50A0BF] p-5 space-y-3 md:flex-row md:space-y-0'>


        <p className='text-center text-4xl text-[#023859] font-bold hover:cursor-pointer hover:text-[#96C6D9] w-full'> Contact Me</p>

        <div className='md:flex'>
          <div className=' main flex float-none space-x-5 p-5 order-1 '>
            <div className='space-y-0 '>
              <div className='space-y-0'>
                <p className='pt-2 text-3xl font-serif p-5 font-bold '>How can I help?

                </p>

                <p className='text-xl p-5 text-justify md:w-3/5'>
                  Facing a web development challenge? Let's solve it together. Share your goals, and I'll outline a tailored solution for you.

                </p>
              </div>
              <div className='p-8 text-2xl order-1 space-y-4 '>
                <div className='flex space-x-4 '>
                  <i className='bx bxs-phone text-4xl' > </i>
                  <p className='text-xl'> +91 XXX XXX 1234</p>
                </div>
                <div className='flex space-x-4' >
                  <i className='bx bxl-gmail text-4xl' ></i>

                  <a href='/' className='text-xl'> imjyotipal01@gmail.com </a>

                </div>
                <div className=' text-3xl space-y-5 space-x-3 '>


                  <a className="hover:cursor-pointer " href='https://github.com/Jyotipal01'> <i className='bx bxl-github text-4xl ' >  </i>     </a>
                  <a className="hover:cursor-pointer " href='https://www.linkedin.com/in/jyoti-pal-78220824a'>  <i className='bx bxl-linkedin-square text-4xl' >  </i>  </a>
                  <a className="hover:cursor-pointer " href='mailto:imjyotipal01@gmail.com'><i className='bx bxl-gmail text-4xl' ></i> </a>

                </div>



              </div>


            </div>

          </div>

          <div className='bg-[#96D2D9]  shadow-xl rounded-xl p-5 order-2'>
            <form action='' className='text-lg flex-col space-y-4'>
              <div>
                <label htmlFor="" className='text-lg' > Your Name</label>

                <input type="text" placeholder='your name' className='ring-1 w-full py-2 outline-none focus:ring-2 mt-1 focus:ring-[#3FA8BF] rounded-md p-3 hover:shadow-[#03738C]' ></input>
              </div>
              <div>
                <label htmlFor="" className='text-lg' > Email Adress</label>

                <input type="text" placeholder='Email@gmail.com' className='ring-1 w-full py-2 outline-none focus:ring-2 focus:ring-[#3FA8BF] rounded-md p-3 mt-1 hover:shadow-[#03738C]' ></input>
              </div>
              <div>
                <label htmlFor="" className='text-lg' >Message</label>

                <textarea type="text" placeholder='Type Your Message Here' rows="4" className='ring-1 w-full py-2 outline-none focus:ring-2 mt-1 focus:ring-[#3FA8BF] rounded-md p-3 hover:shadow-[#03738C]' ></textarea>
              </div>
              <button className='inline-block self-end bg-[#03738C] p-2 
             py-2 px-6 font-semibold  text-white text-md rounded-md' >Send Message

              </button>

            </form>

          </div>

        </div>

      </section>



    </div>
  )
}

export default Home
