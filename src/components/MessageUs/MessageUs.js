import '@/styles/components/MessageUs.css';
import Image from 'next/image';
import Link from 'next/link';
const TelegramIcon = '/svg/telegram-icon.svg';

export default function MessageUs() {
    return (
        <a href="https://t.me/hello_skylang" target='_blank'>
            <div className="message-us-container">
                <Image className='message-us-icon' src={TelegramIcon} width={48} height={48} alt ='Telegram icon'/>
                <p className='message-us-text'>Написати у Телеграм</p>
            </div>
        </a>
    );
}