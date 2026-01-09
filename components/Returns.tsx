import React from 'react';
import { RevealOnScroll } from './ui';
import { useStore } from '../store';

const Returns = () => {
  const { language } = useStore();
  
  return (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <RevealOnScroll>
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12">
            {language === 'ru' ? 'Возврат и обмен' : 'Returns & Exchanges'}
          </h1>
          <div className="space-y-16 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Срок возврата' : 'The Returns Window'}
              </h2>
              <p className="mb-4">
                {language === 'ru' 
                  ? 'Мы предлагаем 14-дневный срок возврата с даты доставки. Товары должны быть возвращены в их первоначальном состоянии: неношеные, нестираные и со всеми внутренними и внешними бирками L\'HOMME.' 
                  : 'We offer a 14-day return window from the date of delivery. Items must be returned in their original condition: unworn, unwashed, and with all L\'HOMME internal and external tags intact.'}
              </p>
              <div className="p-4 border-l-2 border-black bg-stone-50">
                <p className="text-sm font-medium text-black uppercase tracking-widest">
                  {language === 'ru' ? 'Важно: Особые категории' : 'Important: Special Categories'}
                </p>
                <p className="text-sm mt-2">
                  {language === 'ru' 
                    ? 'Обувь необходимо примерять на ковровом покрытии. Парфюмерия и средства ухода должны быть возвращены нераспечатанными в оригинальной термоусадочной упаковке.' 
                    : 'Footwear must be tried on a carpeted surface. Fragrances and grooming products must be returned unopened in their original heat-shrunk wrapping.'}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Процесс глобального возврата' : 'Global Returns Process'}
              </h2>
              <p className="mb-8">
                {language === 'ru' 
                  ? 'Чтобы инициировать возврат, пожалуйста, зайдите в наш <u>Онлайн-портал возвратов</u>, указав номер вашего заказа и адрес электронной почты.' 
                  : 'To initiate a return, please access our <u>Online Returns Portal</u> with your order number and email address. A prepaid shipping label and commercial invoice will be generated for you.'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-black font-bold text-xs uppercase mb-4">{language === 'ru' ? 'Внутренние возвраты' : 'Domestic Returns'}</h3>
                   <p className="text-sm">
                     {language === 'ru' 
                       ? 'Возврат товаров в пределах ЕС и США бесплатен для участников серебряного уровня и выше. Для заказов без регистрации вычитается фиксированная плата в размере $15.' 
                       : 'Returns within the EU and USA are complimentary for silver-tier members and above. For guest orders, a flat fee of $15 is deducted from the refund.'}
                   </p>
                </div>
                <div>
                   <h3 className="text-black font-bold text-xs uppercase mb-4">{language === 'ru' ? 'Международные возвраты' : 'International Returns'}</h3>
                   <p className="text-sm">
                     {language === 'ru' 
                       ? 'Расходы на международную обратную доставку несет покупатель. Таможенные пошлины и налоги не возмещаются.' 
                       : 'International return shipping costs are the responsibility of the customer. Customs duties and taxes are non-refundable through L\'HOMME.'}
                   </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Возврат средств' : 'Refunds'}
              </h2>
              <p>
                {language === 'ru' 
                   ? 'Как только ваш возврат будет получен и проверен нашей командой контроля качества (обычно в течение 48 часов), ваш возврат средств будет обработан на первоначальный способ оплаты.' 
                   : 'Once your return is received and inspected by our Quality Control team (typically within 48 hours), your refund will be processed to the original payment method. Please allow up to 10 business days for the funds to appear in your account, depending on your financial institution.'}
              </p>
            </section>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);
};

export default Returns;
