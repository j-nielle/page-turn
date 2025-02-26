import dynamic from 'next/dynamic';

export const NovelForm = dynamic(() => import('./NovelForm'), {
	ssr: false,
});

export { default as Input } from '@/components/forms/Input';
export { default as Select } from '@/components/forms/Select';
export { default as TextArea } from '@/components/forms/TextArea';
export { default as Form } from '@/components/forms/Form';
export {default as FormFooter} from '@/components/forms/FormFooter';