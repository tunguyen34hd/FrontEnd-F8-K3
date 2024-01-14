import districts from "@/data/quan_huyen.json";
export function GET(request, { params }) {
   // console.log(params);
   const { id } = params;
   const data = Object.values(districts)
      .sort((a, b) => {
         return a.code - b.code;
      })
      .filter(({ parent_code }) => parent_code === id);

   return Response.json(data);
}
