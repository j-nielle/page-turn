import { selections } from "@/lib/model/dev";
import Gallery from '@/components/Gallery';

export default function Recommendations() {
  return (
    <>
      <Gallery items={selections} hasControls={true} />
    </>
  );
}
