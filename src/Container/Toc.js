import React, { Component } from "react";

export default class Toc extends Component {
    render(){
        return(
            <div id="FAQ" className="section">
                <div className="block-content">
                    <h2 className="section-title">Term Of Condition</h2>
                    <div className="columns w-row">
                        <div className="column-faq-left w-col w-col-12">
                            <div className="block-faqs-bg">
                                <div className="faqs-title">
                                    <h3 className="faqs-heading">Get started with PlayApp</h3>
                                    <div className="faqs-arrow-bg"><div className="faqs-arrow w-icon-slider-right"></div></div>
                                </div>
                                <div className="faqs-content">
                                    <div className="space"></div>
                                    <p className="faqs-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lacinia lacus, et congue ipsum.</p>
                                </div>
                            </div>
                            <div className="block-faqs-bg">
                                <div className="faqs-title">
                                    <h3 className="faqs-heading">Listen across devices</h3>
                                    <div className="faqs-arrow-bg"><div className="faqs-arrow w-icon-slider-right"></div></div>
                                </div>
                                <div className="faqs-content">
                                    <div className="space"></div>
                                    <p className="faqs-paragraph">Donec ac maximus eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed urna erat, iaculis quis sem non, suscipit ultricies enim.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column-faq-right w-col w-col-12">
                            <div className="block-faqs-bg">
                                <div className="faqs-title">
                                    <h3 className="faqs-heading">Find and share music</h3>
                                    <div className="faqs-arrow-bg"><div className="faqs-arrow w-icon-slider-right"></div></div>
                                </div>
                                <div className="faqs-content">
                                    <div className="space"></div>
                                    <p className="faqs-paragraph">Phasellus porta porta consequat. Curabitur auctor commodo sapien at rhoncus.</p>
                                </div>
                            </div>
                            <div className="block-faqs-bg">
                                <div className="faqs-title">
                                    <h3 className="faqs-heading">Organize your music</h3>
                                    <div className="faqs-arrow-bg"><div className="faqs-arrow w-icon-slider-right"></div></div>
                                </div>
                                <div className="faqs-content">
                                    <div className="space"></div>
                                    <p className="faqs-paragraph">Nam neque odio, feugiat nec aliquam nec, congue sit amet metus. Donec nibh lacus, tincidunt nec est id, blandit finibus ex.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>Can&#x27;t find an answer? <a href="mailto:knez.milos3@gmail.com">Email us</a></div>
                </div>
            </div>
        )
    }
}