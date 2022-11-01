import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Moon from './svg/icons/moon';
import Sun from './svg/icons/sun';


const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null
  }
  return theme === 'light' ? <Moon /> : <Sun />;
}

export default ThemeSwitch;