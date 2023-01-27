/* eslint-disable react/function-component-definition */
import PublicationFirstArea from "../src/components/posts/HeaderPublication/PublicationFirstArea";
import ListSpaceCardsForHP from "../src/components/spaces/ListSpaceCardsForHP";
import HeaderHP from "../src/components/structure/HeaderHP";
import TitleSection from "../src/components/structure/TitleSection";
import LeftBar from "../src/components/leftBar/leftBar";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/components/layout/Layout";
import CommentList from "../src/components/comments/commentList";
import Space from "../src/components/categories/Category";

const Home: NextPageWithLayout = () => {
  // const postId = à fetcher;

  return (
    <div className="w-screen">
      <div className="w-full flex-x-center bg-white-enedis">
        <HeaderHP />
        <div className="w-[95%] md:w-[91%]">
          <PublicationFirstArea />
          <TitleSection titleText="À la Une sur mes espaces" />
          <ListSpaceCardsForHP />
          <CommentList postId={postId} />
          <Space />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <Layout sideBar={<LeftBar />}>{page}</Layout>;

export default Home;
