import Header from "../components/header";
import Head from "next/head";
import { getSession, signIn } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Cards from "../components/Cards";
export default function Home({ session }) {
  if (!session) return (
    <div className="grid place-items-center hover:cursor-pointer hover:bg-blue-500">
      <h1 onClick={signIn}>Log In</h1>
    </div>
  )
  return (

    <div className="h-screen bg-gray-100 overflow-x-hidden">
      <Head>
        <title>
          Students Portal
        </title>
      </Head>

      {/* Header */}
      <Header />

      <main className="flex h-screen flex-col  ">
        <div className="flex">

          {/* Sidebar */}
          {/* <Sidebar /> */}
          {/* Feed */}
          <div className="m-20  ml-[300px]  mt-5 mr-1 no-wrap grid md:grid-cols-3 gap-10">
            <Cards title="Students Certification" src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png" />
            <Cards title="Awards and Rewards" src="https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png" />
            <Cards title="Workshops" src="https://cdn.pixabay.com/photo/2018/08/29/09/12/business-3639451__340.jpg" />

          </div>
        </div>

        {/* <Feed /> */}
        <div className="ml-[300px]  mt-[-40px] mr-[220px] rounded-md p-4 flex flex-col bg-gray-50 drop-shadow-md">
          <h1 className="font-semibold text-gray-400 text-lg drop-shadow-md">
            Students Certification
          </h1>
          <div className="flex gap-10 p-4 pl-0 h-[10vh] w-[80vw] mb-[200px]">

          </div>
        </div>
        {/* Widgets */}
        <div>
          <div className="ml-[300px]  mt-[40px] mr-[220px] mb-[100px] rounded-md p-4 flex flex-col bg-gray-50 drop-shadow-md">
            <h1 className="font-semibold text-gray-400 text-lg drop-shadow-md">
              Students Certification
            </h1>
            <div className="flex gap-10 p-4 pl-0 h-[10vh] w-[80vw] mb-[200px]">

            </div>
          </div>
        </div>
      </main>
    </div>


  )
}

export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);
  return ({
    props: {
      session
    }
  })
}
