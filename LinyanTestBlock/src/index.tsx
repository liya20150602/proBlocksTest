import React from 'react';
import styles from './index.css';

const Block: React.FC = () => {
  return (
    <div className={styles.normal}>
      <h1>I am a umi block!</h1>
	  <div className={styles.block}>hello world!!!</div>
    </div>
  );
}

export default Block;
