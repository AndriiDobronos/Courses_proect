import React from "react";
import "./contacts.styes.scss"
import { Button } from 'react-bootstrap';
import "./resume.styles.scss"
import resume from "../utils/resumeText.js"

export default () => {
    return <div className={"resume"}>
        <div className="download">
            <a className={"resume-download"}  type={"button"}
               href={resume.download.href}>
                {resume.download.text} &#129095;
            </a>
        </div>
        <div className="resume-left-side">
        <h1 className={"resume-title"}>{resume.name}</h1>
        <h3>{resume.title}</h3>
        <h4>SUMMARY</h4>
        <p>{resume.summary}
        </p>
        <h4>SKILLS</h4>
            <li>{resume.skills.react}</li>
            <li>{resume.skills.script}</li>
            <li>{resume.skills.html}</li>
            <li>{resume.skills.scss}</li>
            <li>{resume.skills.bootstrap}</li>
            <li>{resume.skills.git}</li>
            <li>{resume.skills.sass}</li>
        <h4>EDUCATION</h4>
        <li>
            {resume.education.place}<br/>
            &emsp; {resume.education.period}
        </li>
        <h4>ADDITIONAL COURSES AND TRAININGS</h4>
        <li>
            {resume.courses.school} &emsp;{resume.courses.period}
        </li>
            <a href={resume.courses.href}>
                &emsp;{resume.courses.href}
            </a>
            <h5 className={"valuation"}>&emsp;{resume.courses.valuation} &emsp;{resume.courses.place}</h5>
        <li>
            {resume.courses2.school} &emsp;{resume.courses2.period}
        </li>
        <a href={resume.courses2.href}>
            &emsp;{resume.courses2.href}
        </a>
        <h5 className={"valuation"}>&emsp;{resume.courses2.valuation} &emsp;{resume.courses2.place}</h5>

        <h4>
            WORK EXPERIENCE
        </h4>
        <li>
            {resume.experience1.title}&emsp;{resume.experience1.period}
        </li>
        <li>
            {resume.experience2.title}&emsp;{resume.experience2.period} <br/>
            {resume.experience2.about}
        </li>
        <li>
            {resume.experience3.title}&emsp;{resume.experience3.period} <br/>
            {resume.experience3.about}
        </li>
        <h4>HOBBY</h4>
        <li>
            {resume.hobby}
        </li>
        </div>
        <div className="resume-right-side">
            <h4>CONTACTS</h4>
            <h6>Location :</h6>
            <p>{resume.location}</p>
            <p>{resume.consider}</p>
            <h6>Email :</h6>
            <a href={resume.email.href}>{resume.email.text}</a>
            <h6>Phone :</h6>
            <p>{resume.phone}</p>
            <h6>Telegram :</h6>
            <a href={resume.telegram}>{resume.telegram}</a>
            <h6>Linkedin :</h6>
            <a href={resume.linkedin}>
                {resume.linkedin}
            </a>
            <h6>GitHub :</h6>
            <a href={resume.github}>
                {resume.github}
            </a>
            <h4>LANGUAGES</h4>
            <li>Ukrainian C1</li>
            <li>English B1</li>
            <li>German A2</li>
            <h4>PORTFOLIO</h4>

            {resume.portfolio.map(content =>{
                return <li key={content.name}>
                    {content.name}<br/>
                <a href={content.href}>
                    {content.text}
                </a>
                </li>
            })}

         <Button
        onClick={() => {
            window.open(`${resume.download.href}`)
        }}
        className='resumebtn download-btn'>
             <span className={"text-btn"}>
                  {resume.download.text} &#129095;
             </span>
        </Button>

        </div>
    </div>
}
