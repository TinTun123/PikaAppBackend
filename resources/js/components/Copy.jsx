import React, { useState } from 'react';
import { GoCopy } from "react-icons/go";
import { CgCopy } from "react-icons/cg";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { showSuccessToast } from '../Global/Methods';

const Copy = ({ children, text }) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    showSuccessToast('Copied to clipboard')
  }

  return (
    <div className={'flex gap-2'}>
      {children}
      <CopyToClipboard text={text} onCopy={handleCopy} className={'text-green-500 text-lg cursor-pointer'}>
        {
          copied ? <CgCopy /> : <GoCopy />
        }
      </CopyToClipboard>
    </div>
  );
};

export default Copy;