
import Header from './ui/header/header';

export default function Home() {

  return (
    <div className='h-screen scroll-smooth'>
      <Header />
      <div className='space-y-1 mt-28'>
        <div className='flex' id='section1'>
          <img className='w-[45%]' src='/email-marketing-img.jpg' alt="email" />
          <div className='m-auto '>
          <p className='w-[700px] font-bold  text-start text-textDark text-[40px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet.</p>
          <p className='w-[500px] font-semibold  text-start text-textSoft text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repudiandae error voluptates quisquam consectetur neque non adipisci nisi accusamus quos.</p>
          </div>
        </div>
        <div className='flex' id='section2'>
          <div className='m-auto '>
          <p className='w-[700px] font-bold  text-start text-textDark text-[40px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet.</p>
          <p className='w-[500px] font-semibold  text-start text-textSoft text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repudiandae error voluptates quisquam consectetur neque non adipisci nisi accusamus quos.</p>
          </div>
          <img className='w-[45%]' src='/email-marketing-img-2.jpg' alt="email" />
        </div>
        <div className='flex' id='section3'>
          <img className='w-[45%]' src='/email-marketing-img-3.jpg' alt="email" />
          <div className='m-auto '>
          <p className='w-[700px] font-bold  text-start text-textDark text-[40px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet.</p>
          <p className='w-[500px] font-semibold  text-start text-textSoft text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repudiandae error voluptates quisquam consectetur neque non adipisci nisi accusamus quos.</p>
          </div>
        </div>
        <div className='flex' id='section3'>
          <div className='m-auto '>
          <p className='w-[700px] font-bold  text-start text-textDark text-[40px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet.</p>
          <p className='w-[500px] font-semibold  text-start text-textSoft text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem repudiandae error voluptates quisquam consectetur neque non adipisci nisi accusamus quos.</p>
          </div>
          <img className='w-[45%]' src='/email-marketing-img.jpg' alt="email" />
        </div>
      </div>
    </div>
  )
}
