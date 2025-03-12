import mapleleaf from '../../public/mapleleaf.svg';
import Image from 'next/image'
import { lusitana } from './fonts';

export default function MapleLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
    <Image
      priority
      src={mapleleaf}
      alt="Maple Leaf"
      height={44}
      width={44}
    />
      <p className="text-[44px]">Maple App</p>
    </div>
  );
}
