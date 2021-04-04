 import React from 'react'
 
 
 interface HookProps {
     title: string
     image: string
 }
 
 export const Hook: React.FC<HookProps> = ({ title, image, children }) => {
        return (
            <div className="hookSlide">
                <h1> {title} </h1>
                <img src={image} alt=""/>
                
                <div className="hookSlideChildren">      
                    {children}
                </div>
            </div>
        );
 }