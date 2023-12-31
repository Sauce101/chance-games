import D1 from '../../assets/craps_images/dice/one.svg';
import D2 from '../../assets/craps_images/dice/two.svg';
import D3 from '../../assets/craps_images/dice/three.svg';
import D4 from '../../assets/craps_images/dice/four.svg';
import D5 from '../../assets/craps_images/dice/five.svg';
import D6 from '../../assets/craps_images/dice/six.svg';
// Dice Rotate
export const rotateMd = [
  // 3 front
  'translateZ(-100px) rotateY(0deg)',
  // 5 right
  'translateZ(-100px) rotateY(-90deg)',
  // 4 back
  'translateZ(-100px) rotateY(-180deg)',
  // 2 left
  'translateZ(-100px) rotateY(90deg)',
  // 1 top
  'translateZ(-100px) rotateX(-90deg) ',
  // 6 bottom
  'translateZ(-100px) rotateX(90deg)',
];

export const rotateDie = [
  // 3 front
  'translateZ(-50px) rotateY(0deg)',
  // 5 right
  'translateZ(-50px) rotateY(-90deg)',
  // 4 back
  'translateZ(-50px) rotateY(-180deg)',
  // 2 left
  'translateZ(-50px) rotateY(90deg)',
  // 1 top
  'translateZ(-50px) rotateX(-90deg) ',
  // 6 bottom
  'translateZ(-50px) rotateX(90deg)',
];

// Dice Build
export const buildMd = [
  {
    transform: 'rotateY(0deg) translateZ(100px)',
    src: D3,
    alt: 'three front',
  },
  {
    transform: 'rotateY(90deg) translateZ(100px)',
    src: D5,
    alt: 'five right',
  },
  {
    transform: 'rotateY(180deg) translateZ(100px)',
    src: D4,
    alt: 'four back',
  },
  {
    transform: 'rotateY(-90deg) translateZ(100px)',
    src: D2,
    alt: 'two left',
  },
  {
    transform: 'rotateX(90deg) translateZ(100px)',
    src: D1,
    alt: 'one up top',
  },
  {
    transform: 'rotateX(-90deg) translateZ(100px)',
    src: D6,
    alt: 'six bottom',
  },
];

export const buildDie = [
  {
    transform: 'rotateY(0deg) translateZ(50px)',
    src: D3,
    alt: 'three front',
  },
  {
    transform: 'rotateY(90deg) translateZ(50px)',
    src: D5,
    alt: 'five right',
  },
  {
    transform: 'rotateY(180deg) translateZ(50px)',
    src: D4,
    alt: 'four back',
  },
  {
    transform: 'rotateY(-90deg) translateZ(50px)',
    src: D2,
    alt: 'two left',
  },
  {
    transform: 'rotateX(90deg) translateZ(50px)',
    src: D1,
    alt: 'one up top',
  },
  {
    transform: 'rotateX(-90deg) translateZ(50px)',
    src: D6,
    alt: 'six bottom',
  },
];
