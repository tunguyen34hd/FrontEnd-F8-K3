/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
const Header = () => {
   const menus = ["Item 1", "Item 2", "Item 3"];
   const hello = (
      <>
         <h3>Item</h3>
         <h3>Item</h3>
      </>
   );
   return (
      <>
         <h1>Header</h1>
         <h1>Navigation</h1>
         {menus.map((item, index) => (
            <Fragment key={index}>
               <span>{index}</span>
               <span>{item}</span>
            </Fragment>
         ))}
      </>
   );
};

export default Header;

/*
Fragment: thay cho thẻ bọc, mà không muốn phát sinh ra thẻ html mới
Cú pháp viết tắt của Fragment:
   <>
   </>

Lưu ý: khi render 1 danh sách cần props key thì không dùng viết tắt Fragment đc nên cần viết đầy đủ 
*/
