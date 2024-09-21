import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we're serious about is Delicious food.</p>
                </div>
                <p className='mid'>
                Welcome to Akhil Restaurant, where we offer a delightful culinary experience with fresh, locally-sourced ingredients. Our menu blends tradition with modern flavors, creating unique dishes in a warm, inviting atmosphere. Whether for a special occasion or casual meal, we promise unforgettable dining with every visit.
                </p>
                 <Link to={"/"}>Explore Menu{" "}
                 <span>
                    <HiOutlineArrowNarrowRight />
                    </span>
                    </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>

    </section>
  )
}

export default About