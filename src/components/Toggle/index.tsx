import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import { Container, ToggleLabel, ToggleSelector } from './styles';

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

const Toggle:React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checkedToggle, setCheckedToggle] = useState(false);

  const changeTheme = () => {
    if(theme.title === 'dark') {
      setTheme(light);
      setCheckedToggle(false);
      localStorage.setItem('minha_carteira:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      setCheckedToggle(true);
      localStorage.setItem('minha_carteira:theme', JSON.stringify(dark));
    }
  };

  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(theme.title));
  // }, [theme]);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector 
        checked={ checkedToggle }
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={ changeTheme }
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;