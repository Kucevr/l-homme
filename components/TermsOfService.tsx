import React from 'react';
import { RevealOnScroll } from './ui';
import { useStore } from '../store';

const TermsOfService = () => {
    const { language } = useStore();
    
    return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-serif italic mb-12">{language === 'ru' ? 'Условия использования' : 'Terms of Service'}</h1>
                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Общий обзор' : 'Overview'}</h2>
                            <p>{language === 'ru' ? 'Этот веб-сайт управляется L\'HOMME Atelier. На всем сайте термины «мы», «нам» и «наш» относятся к L\'HOMME. Посещая наш сайт и/или совершая у нас покупку, вы пользуетесь нашими «Услугами» и соглашаетесь соблюдать следующие условия.' : 'This website is operated by L\'HOMME Atelier. Throughout the site, the terms “we”, “us” and “our” refer to L\'HOMME. By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions.'}</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Условия онлайн-магазина' : 'Online Store Terms'}</h2>
                            <p>{language === 'ru' ? 'Соглашаясь с настоящими Условиями использования, вы подтверждаете, что достигли совершеннолетия в вашем регионе проживания, или что вы достигли совершеннолетия и дали нам свое согласие на использование этого сайта вашими несовершеннолетними иждивенцами.' : 'By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.'}</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Товары и услуги' : 'Products and Services'}</h2>
                            <p>{language === 'ru' ? 'Определенные товары или услуги могут быть доступны исключительно онлайн через веб-сайт. Эти товары могут иметь ограниченное количество и подлежат возврату или обмену только в соответствии с нашей Политикой возврата.' : 'Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store.'}</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Точность платежной информации' : 'Accuracy of Billing and Account Information'}</h2>
                            <p>{language === 'ru' ? 'Мы оставляем за собой право отказать в любом заказе, который вы размещаете у нас. Вы соглашаетесь предоставлять актуальную, полную и точную информацию о покупках и учетной записи для всех покупок, сделанных в нашем магазине.' : 'We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.'}</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Применимое право' : 'Governing Law'}</h2>
                            <p>{language === 'ru' ? 'Настоящие Условия использования и любые отдельные соглашения, в соответствии с которыми мы предоставляем вам Услуги, регулируются и толкуются в соответствии с законодательством Франции.' : 'These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of France.'}</p>
                        </section>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </div>
);
};

export default TermsOfService;
