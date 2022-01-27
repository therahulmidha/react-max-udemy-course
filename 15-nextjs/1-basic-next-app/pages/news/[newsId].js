import { useRouter } from "next/router";

function TodayPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1> {`The ${newsId} Page`} </h1>;
}

export default TodayPage;
