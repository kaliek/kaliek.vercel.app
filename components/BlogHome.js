'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Date from './date';
import utilStyles from '../styles/utils.module.css';

const VISITOR_KEY = 'yujiao-visitor';
const VISITOR_ID = 'visitorName';

export default function BlogHome({ allPostsData }) {
  const [visitorName, setVisitorName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const visitor = window.document.querySelector(`#${VISITOR_ID}`);
    if (visitor) {
      const saveToLocalStorage = () => {
        const cleaned = visitor.innerHTML.match(/^[a-zA-Z0-9]+/g);
        if (cleaned && cleaned[0] !== 'Type') {
          localStorage.setItem(VISITOR_KEY, cleaned.join(''));
        }
      };
      visitor.addEventListener('blur', saveToLocalStorage);
      return () => visitor.removeEventListener('blur', saveToLocalStorage);
    }
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (visitorName === '') {
      const value = localStorage.getItem(VISITOR_KEY);
      if (value) {
        setVisitorName(value);
      }
    }
  }, [visitorName, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>Hello{visitorName !== '' && <span> again</span>}, <span>{visitorName}</span></p>
        <p>I'm Yujiao. I'm a full-time software engineer, an amateur yoga teacher and a stay-home baker.</p>
        {
          visitorName === '' && <>
            <p>What's your name?</p>
            <p id={VISITOR_ID} contentEditable suppressContentEditableWarning>Type your name here...</p>
          </>
        }
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
