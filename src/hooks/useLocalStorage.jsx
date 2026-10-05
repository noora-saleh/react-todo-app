import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.error(`خطأ في قراءة المفتاح ${key} من localStorage:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`خطأ في حفظ المفتاح ${key} في localStorage:`, error);
    }
  }, [key, value]);

  return [value, setValue];
}