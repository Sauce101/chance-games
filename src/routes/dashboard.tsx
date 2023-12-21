import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import highlowImg from '../assets/dash_images/highlow.jpg';
import crapsImg from '../assets/dash_images/craps.jpg';
import pokerDice from '../assets/dash_images/pokerdice.jpg';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen place-items-center bg-blue-950">
      {/* Portrait */}
      <div className="my-auto flex flex-col justify-center gap-8 text-white landscape:hidden">
        <motion.div
          className="mx-auto w-3/5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            delay: 0.3,
            duration: 0.7,
          }}
        >
          <img src={crapsImg} alt="craps" />
          <div className="flex justify-between bg-red-800 px-4 py-1">
            <h2 className="tall:text-lg tall2x:text-3xl">Craps</h2>
            <div className="my-auto">
              <Link to="craps">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 tall2x:h-8 tall2x:w-8 tall3x:h-12 tall3x:w-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto w-3/5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            delay: 0.5,
            duration: 0.7,
          }}
        >
          <img src={highlowImg} alt="high card" />
          <div className="flex justify-between bg-green-900 px-4 py-1">
            <h2 className="tall:text-lg tall2x:text-3xl">High Card</h2>
            <div className="my-auto">
              <Link to="video-poker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 tall2x:h-8 tall2x:w-8 tall3x:h-12 tall3x:w-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto w-3/5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            delay: 0.5,
            duration: 0.7,
          }}
        >
          <img src={pokerDice} alt="poker dice" />
          <div className="flex justify-between bg-green-900 px-4 py-1">
            <h2 className="tall:text-lg tall2x:text-3xl">Poker Dice</h2>
            <div className="my-auto">
              <Link to="video-poker">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 tall2x:h-8 tall2x:w-8 tall3x:h-12 tall3x:w-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Landscape */}
      <div className="flex-col-2 my-auto flex justify-evenly text-white portrait:hidden w-4/5 gap-8">
        <motion.div
          className="mx-auto w-3/5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            delay: 0.3,
            duration: 0.7,
          }}
        >
          <img src={crapsImg} alt="craps" />
          <div className="flex justify-between bg-red-800 px-4 py-1">
            <h2 className="my-auto text-xl lg:text-3xl">Craps</h2>
            <div className="my-auto">
              <Link to="craps">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto w-3/5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            delay: 0.5,
            duration: 0.7,
          }}
        >
          <img src={highlowImg} alt="high card" />
          <div className="flex justify-between bg-green-900 px-4 py-1">
            <h2 className="my-auto text-xl lg:text-3xl">High Card</h2>
            <div className="my-auto">
              <Link to="highcard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto w-3/5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            delay: 0.5,
            duration: 0.7,
          }}
        >
          <img src={pokerDice} alt="poker dice" />
          <div className="flex justify-between bg-green-900 px-4 py-1">
            <h2 className="my-auto text-xl lg:text-3xl">Poker Dice</h2>
            <div className="my-auto">
              <Link to="pokerdice">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
