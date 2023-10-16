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
        <p className='description'>Frontend engineer, {Math.abs(new Date(Date.now() - new Date(2018, 7, 13)).getFullYear() - 1970)} years of experience</p>
        <VerticalTimeline animate={false} layout={'1-column-left'} lineColor={'#666'}>
          <TimelineElement
            date={"Sep 2021 - present"}
            title={"Senior Software Engineer (Frontend)"}
            company={"Univers (Envision Digital)"}
            content={
              <ul>
                <li>Build and maintain <code>React</code> websites for carbon and energy resource management products with high customizable page layouts and embeddable widgets</li>
                <li>Advocate of best engineering practices, provide automation solutions to engineering productivity (CI/CD workflows, <code><a href='https://github.com/kaliek/babel-plugin-test-id'>Babel</a></code> and <code><a href='https://github.com/kaliek/eslint-plugin-async-promise'>EsLint</a></code> plugins)</li>
                <li>Recruit and mentor junior engineers, assist in cross-team collaboration, team management and task allocation by standardizing Agile workflows and documentation templates</li>
                <li>Prepare for open sourcing in-house <code>React</code> UI library</li>
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
                <li>Implement the UI elements with <code>React</code> framework for e-trading web applications for both internal traders and external clients on Citi's flagship application Velocity</li>
                <li>Maintain <code>C#</code> communication layer, and collaborate with backend team on schema changes</li>
                <li>Implement unit tests with Jest, assist with deployments and release managements</li>
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
                <li>Eight-month internship as Customer Experience Analyst at Apple Inc.: derive customer satisfaction reports by analysing both quantitative and qualitative data from survey results to improve shipping experience</li>
                <li>Final-year project: design and build a Telegram chatbot that understands questions, provides simple factual answers, and learns from user inputs.</li>
              </ul>
            }
            iconPath={"/images/uni.png"}
          />
        </VerticalTimeline>
      </main>
    </Layout>
  )
}
