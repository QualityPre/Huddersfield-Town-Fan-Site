import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { RiNumbersFill } from 'react-icons/ri';
import { IoFootball, IoCalendarNumberOutline as Calendar } from 'react-icons/io5';
import { AiOutlineCrown as Crown, AiOutlineClockCircle as Clock } from 'react-icons/ai';
import { CgArrowRightR as Position } from 'react-icons/cg';

const Player = ({ players }) => {
    // eslint-disable-next-line no-console
    console.log(players);
    return (
        <div className="mx-auto card w-72 rounded-xl shadow-xl transition-colors duration-1000 ease-in-out bg-sky-400  hover:bg-cyan-200   ">
            <div className="card-actions justify-end mt-4 mr-1 gap-3 ">
                <div className="badge badge-accent gap-2 ">
                    <Crown />
                    Legend
                </div>
                <div className="badge badge-primary gap-2  ">
                    <Clock />
                    90s
                </div>
                <div className="badge badge-info gap-2">
                    <Position />
                    Forward
                </div>
            </div>
            <figure className="py-8 rounded-xl">
                <StaticImage
                    src="../../assets/images/marcusstewart.jpeg"
                    alt="player"
                    placeholder="blurred"
                    width={200}
                    height={200}
                    className="transition duration-300 ease-in-out  transform hover:-translate-y-1 rounded-xl shadow-xl"
                />
            </figure>
            <div className="card-body -mt-12">
                <h2 className="card-title">Marcus Stewart</h2>

                <div className="stats stats-vertical rounded-xl mt-4 bg-sky-300 text-white">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <RiNumbersFill className="text-4xl" />
                        </div>
                        <div className="stat-title font-bold text-xl ">Appearances</div>
                        <div className="stat-value">200</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <IoFootball className="text-4xl" />
                        </div>
                        <div className="stat-title font-bold text-xl">Goals</div>
                        <div className="stat-value">80</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <Calendar className="text-4xl" />
                        </div>
                        <div className="stat-title font-bold">Years played</div>
                        <div className="font-bold">1997-2000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
