import React, { useState } from 'react';
import i18next from './I18next';
import { useTranslation } from 'react-i18next';
import i18n from './I18next';
import './Language_optin.css'

export default function Language_optin() {
    const { t } = useTranslation();
    const languages = [
        { code: "en", lang: "English" },
        { code: "sp", lang: "Spanish" },
    ]
    //language Selectore
    const LanguageSelectore = () => {
        const { i18n } = useTranslation()
    }

    const handleChangeLang = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <h2>Click Any Button And Change Language</h2>
            {languages.map((lng) => {
                return (
                    <button className='lang-chang-btn' key={lng.code} onClick={() => handleChangeLang(lng.code)}>
                        {lng.lang}</button>
                )
            })}


            <h1> {t('Welcome to React')}</h1>
            <h2>Laptop Usage : </h2>
            <ul>
                <li className=''>{t('Work')}</li>
                <li>{t('Education')}</li>
                <li>{t('Communication')}</li>
                <li>{t('Creativity')}</li>

            </ul>

        </>
    )
}
