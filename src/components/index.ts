import dynamic from 'next/dynamic';

export const Editor = dynamic(() => import('./dashboard/editor/Editor'), {
  ssr: false,
});