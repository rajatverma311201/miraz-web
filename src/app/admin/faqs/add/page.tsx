import React from 'react'
import ModelTemplate from "@/components/model";
const page = () => {
  const faqModel={ 
    Question: { type: 'string' },
    Answer: { type: 'string' }
};
  return (
    <div>
      {/* add Events */}
      <ModelTemplate model={faqModel} title="FAQS"/>
    </div>
  )
}

export default page

// import { db } from "@/lib/db";

// // interface AdminHomePageProps {}

// const AdminHomePage =  () => {

//     // const res = await db.faq.findMany();
//     // console.log(db.faq.fields);
//     return (
//         <>
            
//             {/* <h1>AdminHomePage</h1>
//             <hr />
//             <h2>FAQ&apos;s</h2>
//             <ul>
//                 {res.map((item) => (
//                     <li key={item.id} className="mb-4">
//                         <p>{item.question} </p>
//                         <span className="font-bold">{item.answer}</span>
//                     </li>
//                 ))}
//             </ul> */}
//         </>
//     );
// };

// export default AdminHomePage;
