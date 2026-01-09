import React from 'react';
import { RevealOnScroll } from './ui';
import { useStore } from '../store';

const PrivacyPolicy = () => {
    const { language } = useStore();
    
    return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-serif italic mb-12">{language === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}</h1>
                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Вступление' : 'Introduction'}</h2>
                            <p>{language === 'ru' ? 'В L\'HOMME мы уважаем вашу конфиденциальность и стремимся защищать ваши персональные данные. Эта политика конфиденциальности проинформирует вас о том, как мы заботимся о ваших данных, когда вы посещаете наш сайт.' : 'At L\'HOMME, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.'}</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Данные, которые мы собираем' : 'The Data We Collect'}</h2>
                            <p>{language === 'ru' ? 'Мы можем собирать, использовать, хранить и передавать различные виды персональных данных о вас, которые мы сгруппировали следующим образом:' : 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:'}</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>{language === 'ru' ? 'Идентификационные данные: имя, имя пользователя или аналогичный идентификатор.' : 'Identity Data: name, username or similar identifier.'}</li>
                                <li>{language === 'ru' ? 'Контактные данные: адрес выставления счета, адрес доставки, адрес электронной почты и номера телефонов.' : 'Contact Data: billing address, delivery address, email address and telephone numbers.'}</li>
                                <li>{language === 'ru' ? 'Финансовые данные: реквизиты платежной карты (обрабатываются нашими партнерами по безопасным платежам).' : 'Financial Data: payment card details (processed by our secure payment partners).'}</li>
                                <li>{language === 'ru' ? 'Данные о транзакциях: сведения о платежах вам и от вас, а также другие сведения о товарах, которые вы приобрели у нас.' : 'Transaction Data: details about payments to and from you and other details of products you have purchased from us.'}</li>
                                <li>{language === 'ru' ? 'Технические данные: IP-адрес, данные для входа, тип и версия браузера, часовой пояс и местоположение.' : 'Technical Data: IP address, login data, browser type and version, time zone setting and location.'}</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Как мы используем ваши данные' : 'How We Use Your Data'}</h2>
                            <p>{language === 'ru' ? 'Мы будем использовать ваши персональные данные только тогда, когда это разрешено законом. Чаще всего мы будем использовать ваши персональные данные в следующих случаях:' : 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:'}</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>{language === 'ru' ? 'Когда нам необходимо выполнить контракт, который мы собираемся заключить или уже заключили с вами.' : 'Where we need to perform the contract we are about to enter into or have entered into with you.'}</li>
                                <li>{language === 'ru' ? 'В случаях, когда это необходимо для наших законных интересов.' : 'Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.'}</li>
                                <li>{language === 'ru' ? 'Когда нам необходимо соблюдать юридическое обязательство.' : 'Where we need to comply with a legal obligation.'}</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Безопасность данных' : 'Data Security'}</h2>
                            <p>{language === 'ru' ? 'Мы внедрили соответствующие меры безопасности, чтобы предотвратить случайную потерю, использование или несанкционированный доступ к вашим персональным данным.' : 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.'}</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">{language === 'ru' ? 'Связаться с нами' : 'Contact Us'}</h2>
                            <p>{language === 'ru' ? 'Если у вас есть какие-либо вопросы по поводу этой политики конфиденциальности, пожалуйста, свяжитесь с нашим сотрудником по защите данных по адресу <u>privacy@lhomme.com</u>.' : 'If you have any questions about this privacy policy or our privacy practices, please contact our data protection officer at <u>privacy@lhomme.com</u>.'}</p>
                        </section>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </div>
);
};

export default PrivacyPolicy;
