import React from 'react'
import Sidebar from '../../components/Sidebar_CV/Sidebar'
import Header from '../../components/Header/Header'
import styles from './grammar.module.css'
import chevron_icon from '../../assets/ic_chevron-down.svg'
import menu_bar_right from '../../assets/menu-bar-right.svg'
import menu_bar_left from '../../assets/menu-bar-left.svg'
import vector_icon from '../../assets/Vector.svg'
import color_picker from '../../assets/color_picker.svg'
import bold_icon from '../../assets/bold_icon.svg'
import italics_icon from '../../assets/italics_icon.svg'
import underline_icon from '../../assets/underline_icon.svg'
import dollar_icon from '../../assets/dollar_icon.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import cap_icon from '../../assets/cap_icon.svg'
import list1_icon from '../../assets/list1_icon.svg'
import list2_icon from '../../assets/list2_icon.svg'
import upload_icon from '../../assets/upload.svg'
import badge_icon from '../../assets/Badge.svg'
import copy_icon from '../../assets/copy_icon.png'
import { syntax_backend } from "declarations/syntax_backend";
import { useState } from 'react'
import spinner from "../../assets/spinner.svg"
import { AuthClient } from "@dfinity/auth-client";

function Grammar() {
    const [text, setText] = useState('');
    const [rewrite, setRewrite] = useState('');
    const [syntacticErrors, setSyntacticErrors] = useState('');
    const [grammaticErrors, setGrammaticErrors] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [tooltip, setTooltip] = useState({ visible: false, id: null });
    const [activeSection, setActiveSection] = useState('All');
    const [loading, setLoading] = useState(false); // Loading state
    const [wordCount, setWordCount] = useState(0);
    const maxCharacters = 10000;

  function handleInput(event) {
    const value = event.target.value;
    const characterCount = value.length;

    // Check if the character count exceeds the maximum limit
    if (characterCount <= maxCharacters) {
        setText(value);

        // Count words and update state
        const words = value.split(/\s+/).filter(Boolean);
        const count = words.length;
        setWordCount(count);

        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    } else {
        // Truncate the text to the maximum allowed length
        event.target.value = value.slice(0, maxCharacters);
        setText(event.target.value);

        // Optionally, you can update word count or any other state as needed
        const words = event.target.value.split(/\s+/).filter(Boolean);
        const count = words.length;
        setWordCount(count);
    }
}


    function handleCopy(textToCopy, id) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setTooltip({ visible: true, id });
            setTimeout(() => {
                setTooltip({ visible: false, id: null });
            }, 1500);
        }).catch((err) => {
            console.error('Could not copy text: ', err);
        });
    }

    async function handleSubmit() {
        if (text.length < 25) {
            alert('Please enter at least 25 words.');
            return;
        }
        setLoading(true);
        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal().toText();
        const userInput = { text: text };
        const result = await syntax_backend.analyze_grammar(principal, userInput);

        if ('Ok' in result) {
            setRewrite(result.Ok.result.rewrite);
            setGrammaticErrors(result.Ok.result.grammatical_errors);
            setSuggestions(result.Ok.result.general_suggestions);
            setSyntacticErrors(result.Ok.result.syntactic_errors);
            setLoading(false);
        } else {
            console.error('Error:', result.Err.message);
        }
    }

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'All':
                return (
                    <>
                        {syntacticErrors && <div className={styles.response}>
                            <div>
                                <p>Syntactic Errors</p>
                                <div className={styles.tooltip_container}>
                                    <img
                                        src={copy_icon}
                                        alt="copy-icon"
                                        onClick={() => handleCopy(syntacticErrors, 'syntacticErrors')}
                                    />
                                    {tooltip.visible && tooltip.id === 'syntacticErrors' && (
                                        <span className={styles.tooltip}>Copied</span>
                                    )}
                                </div>
                            </div>
                            {syntacticErrors || 'No syntactic errors available'}
                        </div>}
                        {grammaticErrors && <div className={styles.response}>
                            <div>
                                <p>Grammatical Errors</p>
                                <div className={styles.tooltip_container}>
                                    <img
                                        src={copy_icon}
                                        alt="copy-icon"
                                        onClick={() => handleCopy(grammaticErrors, 'grammaticErrors')}
                                    />
                                    {tooltip.visible && tooltip.id === 'grammaticErrors' && (
                                        <span className={styles.tooltip}>Copied</span>
                                    )}
                                </div>
                            </div>
                            {grammaticErrors || 'No grammatical errors'}
                        </div>}
                        {suggestions && <div className={styles.response}>
                            <div>
                                <p>Suggestions</p>
                                <div className={styles.tooltip_container}>
                                    <img
                                        src={copy_icon}
                                        alt="copy-icon"
                                        onClick={() => handleCopy(suggestions, 'suggestions')}
                                    />
                                    {tooltip.visible && tooltip.id === 'suggestions' && (
                                        <span className={styles.tooltip}>Copied</span>
                                    )}
                                </div>
                            </div>
                            {suggestions || 'No suggestions available'}
                        </div>}
                        {rewrite && <div className={styles.response}>
                            <div>
                                <p>Rewrite</p>
                                <div className={styles.tooltip_container}>
                                    <img
                                        src={copy_icon}
                                        alt="copy-icon"
                                        onClick={() => handleCopy(rewrite, 'rewrite')}
                                    />
                                    {tooltip.visible && tooltip.id === 'rewrite' && (
                                        <span className={styles.tooltip}>Copied</span>
                                    )}
                                </div>
                            </div>
                            {rewrite || 'No rewrite available'}
                        </div>}
                    </>
                );
            case 'Grammar':
                return (
                    <div className={styles.response}>
                        <div>
                            <p>Grammatical Errors</p>
                            <div className={styles.tooltip_container}>
                                <img
                                    src={copy_icon}
                                    alt="copy-icon"
                                    onClick={() => handleCopy(grammaticErrors, 'grammaticErrors')}
                                />
                                {tooltip.visible && tooltip.id === 'grammaticErrors' && (
                                    <span className={styles.tooltip}>Copied</span>
                                )}
                            </div>
                        </div>
                        {grammaticErrors || 'No grammatical errors'}
                    </div>
                );
            case 'Recommendations':
                return (
                    <div className={styles.response}>
                        <div>
                            <p>Suggestions</p>
                            <div className={styles.tooltip_container}>
                                <img
                                    src={copy_icon}
                                    alt="copy-icon"
                                    onClick={() => handleCopy(suggestions, 'suggestions')}
                                />
                                {tooltip.visible && tooltip.id === 'suggestions' && (
                                    <span className={styles.tooltip}>Copied</span>
                                )}
                            </div>
                        </div>
                        {suggestions || 'No suggestions available'}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.grammar_section}>
            <Sidebar />
            <div className={styles.header_container}>
                <Header />
            </div>
            <div className={styles.main_container}>
                <div className={styles.icon_container}>
                    <div className={styles.left_container}>
                        <img src={menu_bar_right} alt="" />
                        <img src={menu_bar_left} alt="" />
                        <div className={styles.text_container}>
                            <p>Normal text</p>
                            <img src={chevron_icon} alt="chevron-icon" />
                        </div>
                        <div className={styles.img_container}>
                            <img src={vector_icon} alt="" />
                            <img src={chevron_icon} alt="chevron-icon" />
                        </div>
                        <div className={styles.color_picker_container}>
                            <img src={color_picker} alt="" />
                            <img src={chevron_icon} alt="chevron-icon" />
                        </div>
                    </div>
                    <div className="input_container">
                        <textarea
                            className={styles.auto_textarea}
                            placeholder="Start typing...pasting(Ctrl + V)text.. Input not more than 10,000 characters"
                            onInput={handleInput}
                            value={text}
                        ></textarea>
                            <div className={styles.word_count_container}>
                                <p>Character count: {text.length} / {maxCharacters}</p>
                            </div>
                    </div>
                    <div className={styles.button_container}>
                        <button className={styles.paste_button}>Paste text</button>
                        <button className={styles.upload_button} onClick={handleSubmit} disabled={loading}>
                            Analyze text
                        </button>
                    </div>
               

                </div>
                <div className={styles.result_container}>
                    <p className={styles.text_heading}>Enter at least 25 words to see score</p>
                    <div className={styles.text_responses}>
                        <div onClick={() => setActiveSection('All')}>
                            <p>All</p>
                            <img src={badge_icon} alt="badge-icon" />
                        </div>
                        <div onClick={() => setActiveSection('Grammar')}>
                            <p>Grammar</p>
                            <img src={badge_icon} alt="badge-icon" />
                        </div>
                        <div onClick={() => setActiveSection('Recommendations')}>
                            <p>Recommendations</p>
                            <img src={badge_icon} alt="" />
                        </div>
                    </div>
                    <div className={styles.spinner_container}>
                        <img src={spinner} alt="spinner-img" className={loading ? '' : styles.spinner} />
                    </div>
                    {(rewrite || syntacticErrors || grammaticErrors || suggestions) && (
                        <div className={loading ? styles.spinner : styles.response_container}>
                            {renderSectionContent()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Grammar;
