import useMobileDeviceDetection from 'hooks/useMobileDetection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection();
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}>
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            <Image
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
              }}
              src={'/images/logo-without-stamp.png'}
              width="40"
              height={20}
              alt="company brand"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBrand;
