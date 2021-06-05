import React from "react";

export function Tab({ img, header, text, index, cb }) {
    return (
        <div onClick={cb} className={index == 0 ? "tab__item active" : "tab__item"} key={index}>
            <div className="tab__item-img_wrap">
                <img src={img} className="tab__item-img" />
            </div>
            <div className="tab__item-content_wrap col-10">
                <div className="tab__item-heading">{header}</div>
                <div className="tab__item-text">{text}</div>
            </div>
        </div>
    )
}