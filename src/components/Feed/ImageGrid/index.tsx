import React from 'react';

type Props = {
  images?: Array<string>;
};
function Render(image: string) {
  return (
    <div className='border-y'>
      <img src={image} className='w-full max-h-[384px] ima' />
    </div>
  );
}
function RenderTwo(images: Array<string>) {
  return (
    <div className='grid gap-x-4 overflow-x-hidden grid-cols-2'>
      {images.map((image, index) => (
        <img key={index} src={image || ''} className='col-span-1 ima' />
      ))}
    </div>
  );
}
function RenderThree(images: Array<string>) {
  const xxx = images;
  return (
    <div className='grid grid-rows-4 grid-cols-2 grid-flow-col gap-4 h-96'>
      <img src={xxx[0]} className='row-span-4 h-full w-full' />
      {[xxx[1], xxx[2]].map((image, index) => (
        <img
          key={index}
          src={image || ''}
          className='row-span-2 col-span-1 w-full h-full ima'
        />
      ))}
    </div>
  );
}
function RenderOverlay(images: Array<string>) {
  const [one, two, three, four, ...xxx] = images;
  return (
    <div className='grid grid-rows-4 grid-cols-2 grid-flow-col gap-4 h-96'>
      {[one, two, three, four].map((image, index) => (
        <div
          key={index}
          className='row-span-2 col-span-1 ima  last:relative'
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          {index === 3 && xxx.length > 0 && (
            <div
              className='absolute  w-full h-full'
              style={{
                background: 'rgba(156, 163, 175,0.5)',
              }}
            >
              <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-white'>
                +{xxx.length}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default function ImageGrid({ images }: Props) {
  const xxx = [...(images || [])];
  return (
    <>
      {(() => {
        switch (xxx.length) {
          case 1:
            return Render(xxx[0]);
          case 2:
            return RenderTwo(xxx);
          case 3:
            return RenderThree(xxx);
          default:
            return RenderOverlay(xxx);
        }
      })()}
    </>
  );
}
