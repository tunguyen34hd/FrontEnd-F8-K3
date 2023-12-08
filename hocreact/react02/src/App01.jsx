import User from "./comonents/User";
import Users from "./comonents/Users";
const App = () => {
   // const users = [
   //    { id: 1, name: "User1", email: "email1@gmail.com" },
   //    { id: 2, name: "User2", email: "email2@gmail.com" },
   //    { id: 3, name: "User3", email: "email2@gmail.com" },
   // ];
   // const info = {
   //    company: "F8",
   //    address: "Ha Noi",
   //    teacher: "Hoang An F8",
   // };
   const handleGetData = (data) => {
      console.log(data);
   };
   return (
      <div>
         <h1>React Props</h1>
         {/* {users.map(({ id, name, email }) => (
            <User
               key={id}
               name={name}
               email={email}
               // company={info.company}
               // address={info.address}
               // teacher={info.teacher}
               {...info}
            />
         ))} */}
         <Users onGetData={handleGetData}>
            <h2>Users</h2>
         </Users>
      </div>
   );
};

export default App;

// Props: Truyền dữ liện từ component cha --> component con
// Render props
// Children props
