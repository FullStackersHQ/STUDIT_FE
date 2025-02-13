import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../layouts/Layout';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const CreateStudy = lazy(() => import('../pages/CreateStudy'));
const StudyRecruit = lazy(() => import('../pages/StudyRecruit'));
const EditStudyRecruit = lazy(() => import('../pages/EditStudyRecruit'));
const MyPage = lazy(() => import('../pages/MyPage'));
const Point = lazy(() => import('../pages/Point'));
const StudyMain = lazy(() => import('../pages/StudyMain'));
const EditStudy = lazy(() => import('../pages/EditStudy'));
const StudyRoom = lazy(() => import('../pages/StudyRoom'));
const Search = lazy(() => import('../pages/Search'));
const StudyList = lazy(() => import('../pages/StudyList'));

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={''}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/create-study" element={<CreateStudy />} />
          <Route path="/study-recruit/:recruitId" element={<StudyRecruit />} />
          <Route path="/edit-recruit/:recruitId" element={<EditStudyRecruit />} />
          <Route path="/study" element={<StudyRoom />} />
          {/* <Route path="/study/:studyId:" element={<StudyRoom />} /> */}

          <Route path="/point" element={<Point />} />
          <Route path="/study/:studyId" element={<StudyMain />} />
          <Route path="/edit-study/:studyId" element={<EditStudy />} />
          <Route path="/search" element={<Search />} />
          <Route path="/study-list" element={<StudyList />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
