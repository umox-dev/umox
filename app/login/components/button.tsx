'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { ActionResponse } from '../actions';

const FormButton: FC<
  PropsWithChildren<{ trigger: (formData: FormData) => Promise<ActionResponse> }>
> = (props) => {
  const { trigger, children } = props;

  const [errorText, setErrorText] = useState<string>();

  const handleClick = async (formData: FormData) => {
    const { code, message } = await trigger(formData);

    setErrorText(code < 0 ? message : '');
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
