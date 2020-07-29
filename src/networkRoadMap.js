import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import 'react-vertical-timeline-component/style.min.css';

import style from './css/genView.module.css';

import {Link} from 'react-router-dom';

function networkRoadMap() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sick_vista.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1> Project Roadmap</h1>
        <p>We take every project with serious consideration. We have higlighted the steps we take when it comes to designing your infrastructure</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>

      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001" 
          dateText="Step 1: Assessment"
          dateInnerStyle={{ background: '#123c69', color: 'white' }}
          style={{ color: '#123c69' }}
        >
           <p class={style.handle_gentext}> We take the time to learn your business needs. To become a strong business partner for your
           organization, we explore the following questions:</p>

          
            <p class={style.comment_points}> What are your business goals?</p>
            <p class={style.comment_points}> What role does technology play in the organization?</p>
            <p class={style.comment_points}> How can technology enhance your operations? </p>
          
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="Step 2: Reporting Findings"
          dateInnerStyle={{ background: '#123c69', color: 'white' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <p class={style.handle_gentext}>We share our candid assessment of challenges and opportunities and use this understanding to
          develop a holistic technology strategy and prioritize solutions. This is a collaborative process with your leadership team allowing our professionals to confirm their knowledge of your business and
            operational goals.</p> 
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="Step 3: Assessment"
          
          dateInnerStyle={{ background: '#123c69', color: 'white' }}
          
        >
        <p class={style.handle_gentext}>From our discussions, we create a road-map of high level projects to be completed with mutually
        agreed upon timelines. This conversation includes a discussion of budget for immediate and longer term projects.</p>           
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="Step 4: Alignment"
          dateInnerStyle={{ background: '#123c69', color: 'white' }}
          style={{ color: '#123c69' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <p class={style.handle_gentext}>We will provide a Statement of Work to ensure we are aligned with expectations and then begin
          the on-boarding process. We believe in clear communication at every step of the process and transparency in the cost of our services.</p> 
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="Step 5: onboarding"
          dateInnerStyle={{ background: '#123c69', color: 'white' }}
          style={{ color: '#123c69' }}
        >

          <p class={style.handle_gentext}>As part of the managed services contract, we provide a detailed onboarding process which
generally happens 2-4 weeks prior to going live. The process timeline depends on your
organization’s complexity and technology requirements. We gather information on current
software applications, equipment, infrastructure and security that we will support and document
this for easy access. During the onboarding process:</p>  

          
            <p class={style.comment_points}> We assign a client service manager and technical team to support your business</p>
            <p class={style.comment_points}> Technical teams shares knowledge and understanding of your business systems with the technical support team</p>
            <p class={style.comment_points}> We create a complete inventory of your systems, network and operations</p>
          
        </TimelineItem>
        <TimelineItem
          key="006"
          dateText="Step 6: Deploy Applications"
          dateInnerStyle={{ background: '#123c69', color: 'white' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <p class={style.handle_gentext}>We share our candid assessment of challenges and opportunities and use this understanding to
          develop a holistic technology strategy and prioritize solutions. This is a collaborative process with your leadership team allowing our professionals to confirm their knowledge of your business and
            operational goals.</p> 
        </TimelineItem>
       
      </Timeline>

      <div class={style.container_animation}>
        <div class={style.inner_alignment}> 
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={30} /> %</h2>
            <p class={style.container_text}> Corporations are able to work off-site with Zira Solution</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={125} /></h2>
            <p class={style.container_text}> Projects deployed from start to finish with this roadmap</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={45} /> %</h2>
            <p class={style.container_text}> Stronger network security with Zira Solution</p> 
          </div>
          <div class={style.col}> 
            <h2 class={style.wht_txt}><CountUp  delay={2} end={86} /> %</h2>
            <p class={style.container_text}>Clients are comfortable with our support</p> 
          </div>
      </div>
    </div> 

    </article> 

      <Link  to='/shop' class={style.link_style}> 
        <button className={style.consultButton}>Schedule a consultation</button>
      </Link>

      </section>

    </body>

    </React.Fragment>
  );
}

export default networkRoadMap;