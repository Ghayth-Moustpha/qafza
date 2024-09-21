
const HalfSlider: React.FC  = ()=>{

 return ( <>
<div className="my-auto mx-auto my-40"> 
 <div className="flex w-full m-4" dir="ltr">
 <div className="flex-1   bg-white border shadow-2xl flex justify-center items-center p-10">
 <p className="text-4xl font-bold text-purpleRoyal"> 
قم انت
<span className="text-roseRed">  بالقفزة
  
 </span>
 القادمة
</p>
   
 </div>
 
 <div className="flex-1  flex items-center justify-center overflow-hidden">
   <div className="slider flex space-x-4 animate-slide">
     <img src="image1.jpg" alt="Image 1" className="w-32 h-48 object-cover"/>
     <img src="image2.jpg" alt="Image 2" className="w-32 h-48 object-cover"/>
     <img src="image3.jpg" alt="Image 3" className="w-32 h-48 object-cover"/>
     <img src="image4.jpg" alt="Image 4" className="w-32 h-48 object-cover"/>
   </div>
 </div>
</div> 
</div>
</>
);


};

export default HalfSlider ; 