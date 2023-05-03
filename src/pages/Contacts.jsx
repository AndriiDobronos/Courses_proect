import React from "react";
import "./contacts.styes.scss"
import contents from "../utils/contactText.js"

export default () => {
    return <div className="contacts" >
        <h1 className={"contacts-title"} >Contacts</h1>
        <div className={"contacts-container"}>
            <ul>
            {contents.leftSide.map(content => {
                return <li  key={content.id} className="contacts-box">
                        <img className={"contacts-box-img"} src={content.src} alt={content.alt}/>
                        <a className="contacts-box-link" href={content.href}>{content.text}</a>
                    </li>}
            )}
            </ul>
            <ul>
                {contents.rightSide.map(content => {
                    return <li  key={content.id} className="contacts-box">
                        <img className={"contacts-box-img"} src={content.src} alt={content.alt}/>
                        <a className="contacts-box-link" href={content.href}>{content.text}</a>
                    </li>}
                )}
            </ul>
        </div>
    </div>
}