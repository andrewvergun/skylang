'use client';

import Image from 'next/image';
import {useState} from 'react';
const CopyIcon = '/svg/content_copy.svg';
const CheckIcon = '/svg/check.svg';
import '@/styles/components/CopyButton.css';

const CopyButton = ({textToCopy}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () =>  {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
        } catch(error) {
            setCopied(false);
            console.log('Не вдалося скопіювати', error);
        }
    };
    return (
        <button
            onClick = {handleCopy}
            className='copy-btn'>
            <Image src={copied ? CheckIcon : CopyIcon} className='copy-icon' alt='Copy Icon' width={24} height={24} />
        </button>
    )
}

export default CopyButton;