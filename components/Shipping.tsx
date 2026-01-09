import React from 'react';
import { RevealOnScroll } from './ui';
import { useStore } from '../store';

const Shipping = () => {
  const { language } = useStore();
  
  return (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <RevealOnScroll>
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12">
            {language === 'ru' ? 'Доставка и получение' : 'Shipping & Delivery'}
          </h1>
          <div className="space-y-16 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Консьерж-доставка' : 'Concierge Delivery'}
              </h2>
              <p className="mb-6 text-lg text-black italic">
                {language === 'ru' ? '"Путешествие одежды так же важно, как и её создание."' : '"The journey of a garment is as important as its construction."'}
              </p>
              <p className="mb-8">
                {language === 'ru' 
                  ? 'Все заказы L\'HOMME подготавливаются с особой тщательностью в нашем ателье в Париже. Каждое изделие помещается в специальный пылезащитный чехол и отправляется в нашей фирменной коробке из 100% перерабатываемых материалов.' 
                  : 'All L\'HOMME orders are prepared with meticulous care at our Paris atelier. Each piece is placed in a custom-engineered, dust-proof garment bag and shipped in our Signature 100% recyclable structural box.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <h3 className="text-black font-bold text-xs uppercase mb-2">{language === 'ru' ? 'Стандарт' : 'Standard'}</h3>
                  <p className="text-sm">{language === 'ru' ? 'Бесплатно для всех заказов.' : 'Complimentary for all orders.'}<br/>{language === 'ru' ? '3-5 рабочих дней.' : '3-5 business days.'}</p>
                </div>
                <div>
                  <h3 className="text-black font-bold text-xs uppercase mb-2">{language === 'ru' ? 'Экспресс' : 'Express'}</h3>
                  <p className="text-sm">$25.00 USD<br/>{language === 'ru' ? '1-2 рабочих дня.' : '1-2 business days.'}</p>
                </div>
                <div>
                  <h3 className="text-black font-bold text-xs uppercase mb-2">{language === 'ru' ? 'В тот же день' : 'Same-Day'}</h3>
                  <p className="text-sm">{language === 'ru' ? 'Доступно в Париже и Нью-Йорке.' : 'Available in Paris & NYC.'}<br/>{language === 'ru' ? 'Заказы до 12:00.' : 'Orders before 12:00 PM.'}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Международная доставка' : 'International Shipping'}
              </h2>
              <p className="mb-4">
                {language === 'ru' 
                  ? 'Мы осуществляем доставку более чем в 50 стран мира через DHL Express. Все международные отправления осуществляются по системе DDP (Delivery Duty Paid), что означает, что все налоги и сборы на импорт уже включены в финальную цену.' 
                  : 'We ship to over 50 countries worldwide via DHL Express. All international shipments are DDP (Delivery Duty Paid), meaning all import taxes and duties are included in the final price at checkout.'}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>{language === 'ru' ? 'Евросоюз: 2-3 рабочих дня.' : 'European Union: 2-3 business days.'}</li>
                <li>{language === 'ru' ? 'Северная Америка: 2-4 рабочих дня.' : 'North America: 2-4 business days.'}</li>
                <li>{language === 'ru' ? 'Азия и Океания: 3-5 рабочих дней.' : 'Asia & Oceania: 3-5 business days.'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Требуется подпись' : 'Signature Required'}
              </h2>
              <p>
                {language === 'ru' 
                  ? 'Для обеспечения безопасности вашей покупки все отправления L\'HOMME требуют подписи при получении. Мы не можем перенаправить посылку после её отправки. Если вы отсутствуете в момент доставки, наш курьер предпримет две дополнительные попытки.' 
                  : 'To ensure the security of your purchase, all L\'HOMME shipments require a signature upon delivery. We are unable to redirect packages once they have been dispatched. If you are unavailable at the time of delivery, our courier will make two additional attempts.'}
              </p>
            </section>

            <section className="bg-stone-50 p-8 md:p-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">
                {language === 'ru' ? 'Обязательства по устойчивому развитию' : 'Sustainability Commitment'}
              </h2>
              <p className="text-sm italic mb-4">
                {language === 'ru' ? '"Тишина в дизайне, ответственность в действии."' : '"Silence in design, responsibility in action."'}
              </p>
              <p className="text-sm italic">
                {language === 'ru' 
                  ? 'Наша упаковка на 100% не содержит пластика. Мы используем бумагу, сертифицированную FSC, и краски на растительной основе. С 2024 года L\'HOMME компенсирует 110% выбросов углерода от всех глобальных поставок.' 
                  : 'Our packaging is 100% plastic-free. We use FSC-certified paper and plant-based inks. Since 2024, L\'HOMME has offset 110% of carbon emissions from all global shipments through our partnership with the Global Forest Fund.'}
              </p>
            </section>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);
};

export default Shipping;
