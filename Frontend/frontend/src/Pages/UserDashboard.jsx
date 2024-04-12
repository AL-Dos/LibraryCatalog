import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from '../Components/data';
import Header from '../Components/UHeader';
import Home from '../Assets/home.png';
import Bag from '../Assets/shopping-bag.png';
import Cart from '../Assets/shopping-cart.png';
import Time from '../Assets/stopwatch.png';

const UserDashboard = () => {

  const navigate = useNavigate();

  const handleUserDashboard = () => {
    navigate('/userdashboard');
  };

  const handleUserBooks = () => {
    navigate('/userbag');
  };

  const handleUserTime = () => {
    navigate('/usertime');
  };

  const [selectedBookIndex, setSelectedBookIndex] = useState(null);

  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const handleBookClick = (index) => {
    setSelectedBookIndex(index === selectedBookIndex ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
  };

  return (
    <div className='bg2'>
      <Header />
      <div className='h-5/6 flex gap-16'>
        <div className='flex flex-col w-28 h-full items-center justify-center gap-12 border-r border-gray-300'>
          <button className='side p-3' onClick={handleUserDashboard} ><img src={Home} className='w-8'/></button>
          <button className='side p-3' onClick={handleUserBooks}><img src={Bag} className='w-8'/></button>
          <button className='side p-3' onClick={handleUserTime}><img src={Time} className='w-8'/></button>
        </div>
        <div className='w-11/12'>
          <div className='flex gap-40 mb-5'>
            <div className='flex flex-col ml-10'>
              <div className='flex flex-col gap-10'>
                <h1 className='text-6xl font-play font-medium mt-10'>Keep the story going...</h1>
                <p className='font-dm font-medium'>Don't end the story just yet. Explore more chapters waiting to be discovered
                  within the vast<br />collection of books and resources on our library website.
                  Dive deeper into knowledge and embark<br />on endless literary adventures today.</p>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex justify-between'>
                <div className='flex h-fit gap-3'>
                  <div className='p-3 rounded-full text-xl bg-white mt-10'>
                    {selectedBookIndex !== null && (
                      <p className='font-dm font-medium'>
                        {formatDescription(Data[selectedBookIndex].ab)}
                      </p>
                    )}
                  </div>
                  <div className='flex'>
                    <div className='flex flex-col mt-10 justify-center gap-1'>
                      {selectedBookIndex !== null && (
                        <React.Fragment>
                          <h1 className='text-xl font-semibold'>{Data[selectedBookIndex].author}</h1>
                          <p className='text-sm text-gray-600 font-medium'>{Data[selectedBookIndex].title}</p>
                        </React.Fragment>
                      )}
                    </div>
                  </div>
                </div>
                <button className='p-3 rounded-full bg-white w-fit h-fit mt-10 flex justify-center gap-3 font-dm text-sm items-center cart border border-white'><img src={Cart} className='w-5 h-5' />Add to Cart</button>
              </div>
              {selectedBookIndex !== null && (
                <p className='font-dm font-medium'>
                  {formatDescription(Data[selectedBookIndex].description)}
                </p>
              )}
            </div>
          </div>
          <div className='h-fit w-11/12 mr-20'>
            <Slider {...settings}>
              {Data.map((d, index) => (
                <div key={index} className='py-10 px-8 transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110'>
                  <img src={d.book} className='w-60 drop-shadow-xl shadow-xl cursor-pointer' onClick={() => handleBookClick(index)} />
                  <div className='mt-2 mb-5'>
                    <h1 className='text-2xl font-bebas'>{d.bookname}</h1>
                    <p className='text-sm font-dm'>{d.category}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;