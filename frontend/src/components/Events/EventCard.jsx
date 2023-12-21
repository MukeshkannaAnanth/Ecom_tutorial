import React from "react";
import styles from "../../styles/style";
import CountDown from "./CountDown.jsx"

const EventCard = () => {
  return (
    <div className="w-full block bg-white rounded-lg lg:flex p-2">
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          molestias quaerat sapiente voluptas. Laboriosam enim quo totam, unde
          qui id obcaecati, consequuntur vitae dolore dolorem ut voluptatum
          reprehenderit cumque nemo. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Accusantium molestias quaerat sapiente voluptas.
          Laboriosam enim quo totam, unde qui id obcaecati, consequuntur vitae
          dolore dolorem ut voluptatum reprehenderit cumque nemo.
        </p>
        <div className="flex py-2 justify-between">
            <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
             120000 $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              90000 $
            </h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            40 sold
          </span>
        </div>

        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
