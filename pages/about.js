import Head from 'next/head';
import Layout from '../components/layout';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TimelineElement({ date, title, company, content, iconPath }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ border: '3px solid rgb(33, 150, 243)',boxShadow: 'none', background: 'transparent' }}
      date={date}
      iconStyle={{ background: '#fff' }}
      contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
      icon={<img src={iconPath} />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{company}</h4>
      {content}
    </VerticalTimelineElement>
  )
}
export default function About() {
  return (
    <Layout>
      <Head>
        <title>Yujiao Mo's CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className='description'>Frontend engineer who has worked primarily on React-based projects, {Math.abs(new Date(Date.now() - new Date(2018, 7, 13)).getFullYear() - 1970)} years of experience</p>
        <VerticalTimeline animate={false} layout={'1-column-left'} lineColor={'#666'}>
          <TimelineElement
            date={"Sep 2021 - present"}
            title={"Senior Software Engineer (Frontend)"}
            company={"Univers (Envision Digital)"}
            content={
              <ul>
                <li>Engineer and maintain React-based web applications for carbon and energy resource management, featuring highly customizable layouts and embeddable widgets</li>
                <li>Champion engineering best practices by automating CI/CD workflows and building custom <a href='https://github.com/kaliek/babel-plugin-test-id'>Babel</a> and <a href='https://github.com/kaliek/eslint-plugin-async-promise'>ESLint</a> plugins to enforce coding standards</li>
                <li>Orchestrate the recruitment and mentorship of junior engineers, conduct diligent code reviews, streamline cross-team collaboration and task allocation through standardization of Agile workflows and documentation templates</li>
                <li>Spearhead the preparation and documentation for open-sourcing an in-house React UI library, positioning the library for public release</li>
              </ul>
            }
            iconPath={"/images/univers.jpeg"}
          />
          <TimelineElement
            date={"Jul 2018 - Aug 2021"}
            title={"Frontend Developer"}
            company={"Citibank N.A."}
            content={
              <ul>
                <li>Engineered sophisticated UI elements using React for Citi's flagship e-trading application, Velocity, thereby enhancing the trading experience for both internal and external clients</li>
                <li>Developed and maintained C# and Java middle layers for WebSocket connections, facilitating seamless communication with the backend</li>
                <li>Supported deployments and release management activities, ensuring smooth transitions and minimal service disruptions</li>
              </ul>
            }
            iconPath={"/images/citi.jpeg"}
          />
          <TimelineElement
            date={"2014 - 2018"}
            title={"Bachelor of Science"}
            company={"National University of Singapore"}
            content={
              <ul>
                <li>Major in Business Analytics, winner of Science & Technology Scholarship</li>
                <li>Eight-month internship as Customer Experience Analyst at Apple Inc.: derived customer satisfaction reports by analysing both quantitative and qualitative data from survey results to improve shipping experience</li>
                <li>Final-year project: designed and built a Telegram chatbot that understands questions, provides simple factual answers and learns from user inputs.</li>
              </ul>
            }
            iconPath={"/images/uni.png"}
          />
        </VerticalTimeline>
      </main>
    </Layout>
  )
}
