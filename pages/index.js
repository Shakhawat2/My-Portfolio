// next image
import Image from "next/image";

// components 
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn'
import Avater from '../components/Avatar'

// motion 
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants'

const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text  */}
    <div>
      <div>
        <h1 className="h1">
          Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span>
        </h1>
        {/* subtitle  */}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 xl:mb16 ">
        n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
        </p>
      </div>
    </div>
    {/* image  */}
    <div>image</div>
  </div>;
};

export default Home;
