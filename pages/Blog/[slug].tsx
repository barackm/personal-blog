import Image from 'next/image';
import React from 'react';
import Page from '../../Components/Page/Page';

const index = () => {
  return (
    <Page className=''>
      <div className='flex flex-col w-full'>
        <div className='flex w-full'>
          <div className='relative h-[32rem] bg-secondary w-full rounded-md overflow-hidden'>
            <Image
              src='/images/blog1.jpg'
              alt='article image'
              layout='fill'
              className='object-cover w-full'
            />
          </div>
        </div>
        <div className='flex-col mt-5 px-32'>
          <div className=''>
            <span className='text-sm md:text-base font-bold text-texLight'>
              March 20, 2020
            </span>
          </div>
          <div>
            <h3 className='text-2xl md:text-5xl transition font-semibold hover:text-secondary md:w-2/3 my-2 cursor-pointer'>
              The Let Me List Them Out For You Headlines Are Here.
            </h3>
          </div>
          <div className='flex flex-col my-5 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non
            sequi, amet tenetur repellat et nisi harum dolorem odit voluptate,
            fuga repellendus nulla. Ut eum sunt expedita saepe aspernatur
            voluptates tenetur tempore a, beatae dolor consequatur facere libero
            consequuntur voluptatibus debitis, hic non tempora sequi nihil
            repudiandae asperiores ducimus deserunt. <br /> <br /> Illum, porro
            nihil nostrum autem, excepturi officia quas distinctio reiciendis,
            non libero sunt aliquam unde fugit rerum ab quae laborum!
            Reprehenderit laudantium culpa molestiae cum earum, consectetur sint
            quidem veritatis ea facilis? Eos dolorem dolor suscipit error!
            Inventore sed, doloremque aperiam, sit unde, repellat eos amet
            consequatur tempora fuga ratione enim vitae nulla minus.
            <br />
            <br />
            Dolores quos vel culpa et voluptate dicta tempora cumque, earum
            porro cum perspiciatis odio consequatur repudiandae fugiat, at
            consectetur tenetur, recusandae facilis nam necessitatibus. Nemo
            magnam eaque soluta nostrum dicta possimus excepturi voluptate
            asperiores fuga inventore atque deleniti dolorum ex rem saepe aut
            similique, a quibusdam perferendis molestias veniam. Perferendis
            quos quas, vitae distinctio ab maiores nemo natus, amet quia harum
            corporis tempore reiciendis error delectus voluptates assumenda
            maxime nihil earum pariatur nobis deleniti suscipit ipsam explicabo.
            Vitae error quidem culpa id quisquam! Sunt delectus magnam nulla
            tempora numquam dolor praesentium accusamus ex in! Esse officia
            repudiandae numquam itaque officiis praesentium, facere sequi,
            doloribus ullam optio aliquid? Ullam, obcaecati.
            <br /> <br />
            Dolorum molestias impedit exercitationem blanditiis harum. Magnam
            perferendis voluptatem iusto maiores. Dolores quam vel in magni,
            porro quaerat ducimus nesciunt quasi sapiente? Cumque distinctio
            obcaecati alias illo, delectus, hic dicta dolor voluptatibus, velit
            ipsum temporibus? Facilis minus ratione a accusamus mollitia
            perspiciatis sapiente, odio laborum. Hic debitis laboriosam
            consequuntur esse tenetur mollitia. Itaque explicabo dolore ipsam
            amet nam, voluptatem ad minima deserunt voluptates voluptatum
            cupiditate sed beatae adipisci quibusdam ab consequatur tempora
            labore velit nobis. Nam voluptatibus inventore numquam velit debitis
            dolor, itaque dolores iste aperiam voluptas!
          </div>
        </div>
      </div>
    </Page>
  );
};

export default index;
