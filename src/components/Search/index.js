import { useState } from 'react';
import Svg from '../Svg';
import styles from "./style.module.scss";

export default function Search({ onQueryChange, className }) {
  const [timeoutId, setTimeoutId] = useState(null);

  const handleInputChange = (event) => {
    const searchQuery = event.target.value;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      onQueryChange(searchQuery);
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  return (
    <div className={`${styles.searchBar} ${className}`}>
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
      <Svg name="magnifying-glass-solid" width={20} height={20} />
    </div>
  );
}
