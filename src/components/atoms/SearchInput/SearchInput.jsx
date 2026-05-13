//react libraries and components
import { useState, useEffect } from 'react';

//sass
import styles from './_SearchInput.module.scss';

export default function SearchInput({ text, userInput, setUserInput, setIsSearchButtonPushed }) {


    return (
        <div className={styles.search_input}>
            <button className={styles.search_input__button} onClick={() => setIsSearchButtonPushed(true)} type='button' aria-label='Search'>
                <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                    <path fillRule='evenodd' clipRule='evenodd' d='M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z' fill='white' />
                </svg>
            </button>
            <input
                className={`${styles.search_input__input}  text_preset_2`}
                type='text'
                placeholder={`Search for ${text}`}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setIsSearchButtonPushed(true);
                    }
                }}
                value={userInput}
            />
        </div>
    )
}