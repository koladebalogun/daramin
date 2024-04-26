import Image from "next/image";
import React from "react";

const Images = ({...props}) => {
  return (
    <div className={props.class}>
      <Image src={props.image1} alt="" width={200} height={300}/>
      <Image src={props.image2} alt="" width={200} height={300}/>
      <Image src={props.image3} alt="" width={200} height={300}/>
      <Image src={props.image4} alt="" width={200} height={300}/>
      <Image src={props.image5} alt="" width={200} height={300}/>
    </div>
  );
};

export default Images;
