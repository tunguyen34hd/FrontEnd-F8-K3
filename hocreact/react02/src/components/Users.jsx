const Users = ({ onGetData, children }) => {
   console.log(children);
   const handleClick = () => {
      onGetData("Hello F8");
   };
   return (
      <div>
         {children}
         {/* <h1>Users</h1> */}
         <button onClick={handleClick}>Click me</button>
      </div>
   );
};

export default Users;
