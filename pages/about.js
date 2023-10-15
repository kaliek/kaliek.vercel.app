import Head from 'next/head';
import Layout from '../components/layout';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Yujiao Mo's CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className='description'>Frontend engineer, {Math.abs(new Date(Date.now() - new Date(2018, 7, 13)).getFullYear() - 1970)} years of experience</p>

        <VerticalTimeline layout={'1-column-left'} lineColor={'#666'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sep 2021 - present"
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<img src="/images/univers.jpeg" />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer (Frontend)</h3>
            <h4 className="vertical-timeline-element-subtitle">Univers (Envision Digital)</h4>
            <ul>
              <li>Build and maintain websites for carbon and energy resource management products with high customizable page layouts and embeddable widgets</li>
              <li>Advocate of best engineering practices, provide automation solutions to engineering productivity (CI/CD workflows, Babel and EsLint plugins)</li>
              <li>Recruit and mentor junior engineers, assist in team managment and task allocation</li>
              <li>Prepare for open sourcing in-house React UI library</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ border: '3px solid #2196f3', color: 'black', boxShadow: 'none' }}
            date="Jul 2018 - Aug 2021"
            iconStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
            icon={<img src="/images/citi.jpeg" />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Citibank N.A.</h4>
            <ul>
              <li>Implement the UI elements with React framework for e-trading web applications for both internal traders and external clients on Citi's flagship application Velocity</li>
              <li>Maintain C# communication layer, and collaborate with backend team on schema changes</li>
              <li>Implement unit tests with Jest, assist with deployments and release managements</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2018"
            contentStyle={{ border: '3px solid #2196f3', color: 'black', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
            icon={<img src="/images/uni.png" />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science</h3>
            <h4 className="vertical-timeline-element-subtitle">National University of Singapore</h4>
            <ul>
              <li>Major in Business Analytics, winner of Science & Technology Scholarship</li>
              <li>Eight-month internship as Customer Experience Analyst at Apple Inc.: derive customer satisfaction reports by analysing both quantitative and qualitative data from survey results to improve shipping  experience</li>
              <li>Final-year project: design and build a Telegram chatbot that understands questions, provides simple factual answers, and learns from user inputs.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </main>
    </Layout>
  )
}
