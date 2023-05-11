import About from './components/About'
import Main from './components/main'
 import Navbar from './components/navbar'
import Projects from './components/Projects'
import Skills from './components/skills'
export default function Home() {
  return (
    <main>
      
       <Navbar/>
       <Main/>
       <About/>
       <Skills/>
       <Projects/>
    </main>
  )
}
