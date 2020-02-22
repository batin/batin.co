import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from 'react-toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <Toggle
        defaultChecked={true}
        icons={{
          checked: <span role="img" aria-label="change-theme"> 🌙 </span>,
          unchecked: <span role="img" aria-label="change-theme"> ☀️ </span>,
        }}
        onChange={darkMode.toggle}
      />
    </div>
  );
};

export default DarkModeToggle;