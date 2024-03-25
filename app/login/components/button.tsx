'use client';

import { FC, PropsWithChildren, useState } from 'react';

const FormButton: FC<
  PropsWithChildren<{ trigger: (formData: FormData) => Promise<string | undefined> }>
> = (props) => {
  const { trigger, children } = props;

  const [errorText, setErrorText] = useState<string>();

  const handleClick = async (formData: FormData) => {
    const error = await trigger?.(formData);
    setErrorText(error);
  };

  return (
    <div className="flex flex-col items-start">
      <button className="text-blue-400" formAction={handleClick}>
        {children}
      </button>
      <span>{errorText}</span>
    </div>
  );
};

export default FormButton;
