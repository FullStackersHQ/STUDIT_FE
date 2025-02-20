import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layouts/Layout';
import LoginRequiredLayout from '../layouts/LoginRequiredLayout';
import LoginRedirect from '../pages/LoginRedirect';
import LoadingScreen from '../components/LoadingScreen';

const Login = lazy(() => import('../pages/Login'));
const CreateStudy = lazy(() => import('../pages/CreateStudy'));
const RecruitDetail = lazy(() => import('../pages/RecruitDetail'));
const EditRecruit = lazy(() => import('../pages/EditRecruit'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Point = lazy(() => import('../pages/Point'));
const StudyDetail = lazy(() => import('../pages/StudyDetail'));
const EditStudy = lazy(() => import('../pages/EditStudy'));
const Home = lazy(() => import('../pages/Home'));
const Search = lazy(() => import('../pages/Search'));
const MyStudyList = lazy(() => import('../pages/MyStudyList'));
const Statistics = lazy(() => import('../pages/Statistics'));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login/oauth2/callback/kakao" element={<LoginRedirect />} />
          <Route path="/search" element={<Search />} />

          <Route element={<LoginRequiredLayout />}>
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/point" element={<Point />} />
            <Route path="/create-study" element={<CreateStudy />} />
            <Route path="/my-study" element={<MyStudyList />} />
            <Route path="/edit-recruit/:recruitId" element={<EditRecruit />} />
            <Route path="/edit-study/:studyId" element={<EditStudy />} />
            <Route path="/study/statistics/:studyId" element={<Statistics />} />
          </Route>

          <Route path="/" element={<Home type={'recruits'} />} />
          <Route path="/recruit/:recruitId" element={<RecruitDetail />} />

          <Route path="/study-list" element={<Home type={'rooms'} />} />
          <Route path="/study/:studyId" element={<StudyDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
