import { motion } from "framer-motion";
import { CiMenuKebab } from "react-icons/ci";
import {
  FaAnglesUp,
  FaCss3Alt,
  FaFacebookF,
  FaHtml5,
  FaMobile,
  FaPython,
  FaReact,
  FaTwitter,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import "./App.css";
import { FaAngleDoubleDown, FaInstagram, FaMailBulk } from "react-icons/fa";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./App1";
import note from "../src/images/Screenshot From 2025-09-18 13-40-42.png";
import notep from "../src/images/pius.jpg";
import church from "../src/images/mission.png";
import { PiGithubLogoBold } from "react-icons/pi";

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#38bdf8" /> {/* Accent cyan */}
    </mesh>
  );
}

function App() {
  return (
    <div className="w-screen overflow-x-hidden overflow-hidden scroll-smooth bg-slate-900 text-slate-100">
      {/* First Section */}
      <section className="bg-slate-900 w-screen h-screen flex flex-col sm:flex-col m-0 pt-5 ">
        {/* Top Bar */}
        <motion.div
          className="flex justify-between items-center w-screen h-12 z-10 fixed px-6 bg-slate-950/70 backdrop-blur-sm"
          initial={{ y: -200, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn", type: "spring" }}
        >
          <p className="text-lg font-bold text-sky-400 cursor-pointer pointer-events-none select-none">
            JPOG Portfolio
          </p>
          <a href="#">
            <CiMenuKebab size={28} className="text-slate-100" />
          </a>
        </motion.div>

        {/* Main Hero */}
        <div className="w-full h-screen flex flex-col sm:flex-row pl-0">
          <div className="h-full w-screen relative flex justify-center items-center sm:w-[50%]">
            <motion.div
              initial={{ x: -200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-tr-full rounded-br-full w-full h-full bg-gradient-to-r from-slate-800 to-slate-900 flex flex-col justify-center items-center px-6 sm:w-[100%]"
            >
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-5xl sm:text-6xl font-bold mb-6 text-sky-400 text-center"
              >
                Hi, I’m JOHN PAUL OGIRIMA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="text-lg max-w-2xl text-center text-slate-300"
              >
                A passionate full-stack, mobile, Python and C developer who
                loves creating modern web & mobile applications.
                and also a graphic designer
              </motion.p>
              <motion.a
                className="bg-slate-500 text-3xl px-10 py-3 mt-10 rounded rounded-[90px] transform pointer select-none tr hover:bg-cyan-400 hover:text-grey"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Download my CV
              </motion.a>
            </motion.div>
          </div>
          <div className=" sm:visible sm:h-screen sm:w-[50%] sm:bg-black opacity-5"></div>
        </div>
      </section>

      <Portfolio />

      {/* Second Section (Skills) */}
      <section
        id="section2"
        className="bg-slate-800 h-screen w-screen flex flex-col justify-center items-center relative"
      >
        {/* Glow background */}
        <div className="absolute w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-64 h-64 flex justify-center items-center"
        >
          {/* Central Mobile Icon */}
          <FaMobile color="#38bdf8" size={120} className="z-10" />

          {/* Orbit container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0"
          >
            {/* Icons in orbit */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <FaPython size={40} className="text-yellow-400" />
            </div>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2">
              <FaReact size={40} className="text-sky-400" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <IoLogoJavascript size={40} className="text-yellow-200" />
            </div>
            <div className="absolute top-1/2 -left-6 -translate-y-1/2">
              <FaCss3Alt size={40} className="text-pink-400" />
            </div>
            <div className="absolute top-1/4 left-1/4">
              <FaHtml5 size={40} className="text-red-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Down Arrow */}
      </section>

      {/* Third Section (3D) */}
      <section
        id="section3"
        className="w-screen h-screen bg-slate-900 relative"
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center">
          <p className="text-[15em] font-bold text-sky-400">3D</p>
          <p className="text-slate-300 text-2xl">Website Designing</p>
        </div>

        <div className="absolute inset-0">
          <Canvas>
            <ambientLight intensity={0.2} />
            <directionalLight position={[2, 2, 2]} />
            <Box />
            <OrbitControls />
          </Canvas>
        </div>
      </section>

      <section className=" flex-nowrap item-center overflow-x-auto h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black items-center flex-col">
        <div className="flex flex-nowrap gap-8 px-10 item-center ">
          <div className="item mt-32 sm:mt-0 w-96 h-96 flex-shrink-0 bg-slate-950/70 sm:w-11/12 sm:h-fit">
            <img src={note} className="w-full" />
            <p className="text-3xl text-pretty font-black text-sky-500">NOTEPAD</p>
            <p className=" font-bold font-serif text-sky-300">a note app that help with keeping of what to BUY, ROUTINE, GOALS, GUIDANCE AND IDEA. with upcoming features of being able to access your notes anywhere, with any kind of device</p>
          </div>
          <div className=" flex flex-col w-96 item-center justify-center h-96 mt-32 flex-shrink-0 bg-slate-950/70 sm:w-11/12 sm:h-fit">
            <img src={notep} className="w-[40%] align-middle sm:ml-[25%]"  />
            <p className="text-3xl text-pretty font-black text-sky-500">PRODUCT DESIGN</p>
            <p className=" font-bold font-serif text-sky-300">A company flier for a fashion industry</p>
          </div>
          <div className="item w-96 h-96 mt-32 flex-shrink-0 bg-slate-950/70">
            <img src={church} className="w-[50%] ml-[90px]" />
            <p className="text-3xl text-pretty font-black text-sky-500">CHURCH FLIER</p>
            <p className=" font-bold font-serif text-sky-300">a design for orphanage visitation, did for REDDEMED CHRISTIAN FELLOWSHIP PRINCE ABUBAKAR AUDU UNIVERSITY</p>
          </div>
        </div>
      </section>
      {/* Contact Section */}

      <section
        id="section4"
        className="w-screen h-screen flex flex-col justify-center items-center bg-slate-800 text-slate-100"
      >
        <h2 className="text-4xl font-bold mb-10 text-sky-400">Contact Me</h2>
        <div className="flex flex-col space-y-6 sm:flex-row sm:gap-10 sm:flex-wrap justify-center align-middle items-center">
        <a className=" pointer-events-auto select-none" href="https://x.com/JPCODES_Jp">
          <div className="flex items-center justify-center space-x-4 sm:p-5 sm:w-[500px] sm:border sm:border-sky-400 sm:rounded-2xl">
            <FaTwitter size={70} className="text-sky-400" />
            <p>Twitter</p> 
          </div>
          </a>
          <a className="pointer-auto select-none" href="https://web.facebook.com/paulogirima.john">

          <div className="flex items-center justify-center space-x-4 sm:p-5 sm:w-[500px] sm:border sm:border-sky-400 sm:rounded-2xl">
            <FaFacebookF size={70} className="text-sky-400" />
            <p>Facebook</p>
          </div>
          </a>
          <a className="pointer-auto select-none " href="mailto:johnpaulogirima156@gmailcom" >
            
          <div className="flex  justify-center items-center space-x-4 sm:p-5 sm:w-[500px] sm:border sm:border-sky-400 sm:rounded-2xl">
            <FaMailBulk size={70} className="text-sky-400" />
            <p>Email</p>
          </div>
          </a>
          <a className="pointer-auto select-none" href="https://www.instagram.com/jp_tech_neta/">
          <div className="flex  justify-center items-center space-x-4 sm:p-5 sm:w-[500px] sm:border sm:border-sky-400 sm:rounded-2xl">
            <FaInstagram size={70} className="text-sky-400" />
            <p>Instagram</p>
          </div>
          </a>
          <a className="pointer-events-auto select-none" href="https://github.com/JPOG1">

          <div className="flex  justify-center items-center space-x-4 sm:p-5 sm:w-[500px] sm:border sm:border-sky-400 sm:rounded-2xl">
            <PiGithubLogoBold size={70} className="text-sky-400" />
            <p>Github</p>
          </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
